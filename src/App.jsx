import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import Home from './pages/Home';
import Chat from './pages/Chat';
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
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
