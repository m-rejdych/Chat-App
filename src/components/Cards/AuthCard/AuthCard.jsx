import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { Card, makeStyles } from '@material-ui/core';

import UserAuth from '../../../pages/Auth/UserAuth';
import GuestAuth from '../../../pages/Auth/GuestAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    left: -30,
    bottom: -25,
    backgroundColor: theme.palette.secondary.main,
    height: '100%',
    width: '100%',
    borderRadius: 25,
    zIndex: ({ isOnTop }) => (isOnTop ? 2 : 1),
  },
}));

const AuthCard = forwardRef(({ isOnTop }, ref) => {
  const classes = useStyles({ isOnTop });
  const userAuth = useSelector((state) => state.cards.userAuth);
  const guestAuth = useSelector((state) => state.cards.guestAuth);

  return (
    <Card ref={ref} elevation={5} className={classes.root}>
      {userAuth && <UserAuth />}
      {guestAuth && <GuestAuth />}
    </Card>
  );
});

export default AuthCard;
