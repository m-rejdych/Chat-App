import React from 'react';
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

  return (
    <div className={classes.root}>
      <Cards />
    </div>
  );
};

export default Home;
