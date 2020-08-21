import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import { Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
    margin: theme.spacing(1, 2),
    alignSelf: ({ userId, currentUserId }) =>
      currentUserId === userId ? 'flex-end' : 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    alignItems: ({ userId, currentUserId }) =>
      currentUserId === userId ? 'flex-end' : 'flex-start',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: ({ userId, currentUserId }) =>
      currentUserId === userId
        ? theme.palette.primary.main
        : theme.palette.grey[200],
    borderRadius: 20,
    overflowWrap: 'break-word',
  },
  name: {
    margin: theme.spacing(0, 1.5),
  },
}));

const Message = ({ message, author, userId }) => {
  const currentUserId = useSelector((state) => state.auth.userId);
  const classes = useStyles({ userId, currentUserId });
  const messageRef = useRef(null);

  useEffect(() => {
    const message = messageRef.current;

    gsap.set(message, { transformOrigin: '50% 50%' });
    gsap.fromTo(
      message,
      { autoAlpha: 0, scaleX: 0.3 },
      { autoAlpha: 1, scaleX: 1, duration: 0.4, ease: 'back' },
    );
  }, []);

  return (
    <div ref={messageRef} className={classes.root}>
      <Typography
        className={classes.name}
        variant="caption"
        color="textSecondary"
      >
        {author}
      </Typography>
      <Paper elevation={2} className={classes.paper}>
        <Typography>{message}</Typography>
      </Paper>
    </div>
  );
};

export default Message;
