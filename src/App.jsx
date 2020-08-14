import React from 'react';
import { makeStyles } from '@material-ui/core';

import Home from './pages/Home';
import Footer from './shared/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
