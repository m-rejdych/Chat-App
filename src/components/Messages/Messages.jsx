import React from 'react';
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

const Messages = ({ messages }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {messages.map((message, index) =>
        index === messages.length - 1 ? (
          <Message key={message.id} {...message} self />
        ) : (
          <Message key={message.id} {...message} />
        ),
      )}
    </div>
  );
};

export default Messages;
