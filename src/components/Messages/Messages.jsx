import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import Message from './Message';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    height: '95%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Messages = () => {
  const classes = useStyles();
  const messages = useSelector((state) => state.messages.messages);

  return (
    <div className={classes.root}>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
};

export default Messages;
