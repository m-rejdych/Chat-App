import React from 'react';
import { Card, CardHeader, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 290,
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: 25,
  },
}));

const ActiveUsersContainer = () => {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader title="Active users" />
      <CardContent></CardContent>
    </Card>
  );
};

export default ActiveUsersContainer;
