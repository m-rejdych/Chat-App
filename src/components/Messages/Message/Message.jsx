import React from 'react';
import classNames from 'classnames';
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

  return (
    <div className={classes.root}>
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
