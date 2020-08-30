import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  IconButton,
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Fab,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ForumIcon from '@material-ui/icons/Forum';

import Messages from '../Messages';
import { KEYS } from '../../constants';
import { db } from '../../firebase';
import { addMessage, setMessages } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    bottom: 21.5,
    minWidth: 500,
    minHeight: 600,
    width: '35vw',
    height: '83vh',
    backgroundColor: '#fff',
    borderRadius: 25,
    overflowX: 'visible',
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 43px)',
      width: '100%',
      borderRadius: 0,
      minWidth: 'initial',
      minHeight: 'initial',
    },
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
  },
  cardActions: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3, 0),
    flexShrink: 0,
  },
  textField: {
    width: '70%',
    backgroundColor: '#fff',
  },
  roomsButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 10,
    visibility: 'hidden',
    [theme.breakpoints.down('xs')]: {
      visibility: 'visible',
    },
  },
}));

const ChatContainer = ({ collection, openDrawer }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const messages = useSelector((state) => state.messages.messages);
  const userId = useSelector((state) => state.auth.userId);
  const name = useSelector((state) => state.auth.name);
  const guest = useSelector((state) => state.auth.guest);
  const dispatch = useDispatch();
  const cardContentRef = useRef(null);

  useEffect(() => {
    cardContentRef.current.scrollTop = cardContentRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    db.collection(collection).onSnapshot((response) => {
      const fetchedMessages = [];
      response.forEach((doc) => fetchedMessages.push(doc.data()));
      dispatch(
        setMessages(
          fetchedMessages.sort((a, b) => (a.postDate > b.postDate ? 1 : -1)),
        ),
      );
    });
  }, [dispatch, collection]);

  const handleClick = () => {
    const message = {
      id: uuid(),
      message: value,
      userId,
      author: name || guest,
      postDate: new Date(),
    };
    dispatch(addMessage({ collection, message }));
    setValue('');
  };

  return (
    <Card elevation={3} className={classes.root}>
      <Fab
        onClick={openDrawer}
        className={classes.roomsButton}
        color="secondary"
      >
        <ForumIcon />
      </Fab>
      <CardContent ref={cardContentRef} className={classes.cardContent}>
        <Messages />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <TextField
          className={classes.textField}
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) =>
            e.key === KEYS.ENTER && value.trim() !== '' && handleClick()
          }
        />
        <IconButton
          disabled={value.trim() === ''}
          onClick={handleClick}
          color="secondary"
        >
          <SendIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ChatContainer;
