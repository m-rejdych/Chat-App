import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
    margin: theme.spacing(1, 2),
    alignSelf: ({ self }) => (self ? 'flex-end' : 'flex-start'),
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: ({ self }) =>
      self ? theme.palette.primary.main : theme.palette.grey[200],
    borderRadius: 20,
    overflowWrap: 'break-word',
  },
  name: {
    alignSelf: ({ self }) => (self ? 'flex-end' : 'flex-start'),
    margin: theme.spacing(0, 1.5),
  },
}));

const Message = ({ message, author, self }) => {
  const classes = useStyles({ self });
  const messageRef = useRef(null);

  useEffect(() => {
    const message = messageRef.current;

    gsap.set(message, { transformOrigin: '50% 50%' });
    gsap.fromTo(
      message,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.2, ease: 'power3.inOut' },
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
