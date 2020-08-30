import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import Cards from '../../components/Cards';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 43px)',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();
  const userId = useSelector((state) => state.auth.userId);

  return (
    <div className={classes.root}>
      {userId && <Redirect to="/chat/general" />}
      <Cards />
    </div>
  );
};

export default Home;
