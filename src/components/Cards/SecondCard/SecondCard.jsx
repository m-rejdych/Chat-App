import React, { forwardRef } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: -30,
    bottom: -25,
    backgroundColor: theme.palette.secondary.main,
    height: '100%',
    width: '100%',
    borderRadius: 25,
    zIndex: ({ isOnTop }) => (isOnTop ? 2 : 1),
  },
}));

const SecondCard = forwardRef(({ isOnTop }, ref) => {
  const classes = useStyles({ isOnTop });

  return <Card ref={ref} elevation={5} className={classes.root}></Card>;
});

export default SecondCard;
