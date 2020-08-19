import React from 'react';
import { makeStyles } from '@material-ui/core';

import Message from './Message';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    height: '95%',
    overflowY: 'auto',
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
          <Message {...message} self />
        ) : (
          <Message {...message} />
        ),
      )}
    </div>
  );
};

export default Messages;
