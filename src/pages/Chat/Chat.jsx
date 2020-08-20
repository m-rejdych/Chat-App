import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
} from '@material-ui/core';

import Messages from '../../components/Messages';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    bottom: 21.5,
    width: 500,
    height: 600,
    backgroundColor: '#fff',
    borderRadius: 25,
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
}));

const Chat = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
    { id: uuid(), message: 'foo', author: 'foo' },
  ]);
  const cardContentRef = useRef(null);

  useEffect(() => {
    cardContentRef.current.scrollTop = cardContentRef.current.scrollHeight;
  }, [messages]);

  const handleClick = () => {
    setValue('');
    setMessages([...messages, { id: uuid(), message: value, author: 'Frank' }]);
  };

  return (
    <div className={classes.root}>
      <Card elevation={3} className={classes.card}>
        <CardContent ref={cardContentRef} className={classes.cardContent}>
          <Messages messages={messages} />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <TextField
            multiline
            className={classes.textField}
            variant="outlined"
            rows={2}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            disabled={value.trim() === ''}
            onClick={handleClick}
            color="secondary"
          >
            Send
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Chat;
