import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
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
  const userId = useSelector((state) => state.auth.userId);

  return (
    <div className={classes.root}>
      <Switch>
        {userId && <Route path="/chat/:room" component={Chat} />}
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
