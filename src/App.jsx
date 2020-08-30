import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import { setUser } from './store/actions';
import { auth } from './firebase';

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
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!userId && user) {
        const { email, uid, displayName } = user;
        dispatch(
          setUser({
            userId: uid,
            name: displayName,
            email,
          }),
        );
      }
    });
  }, []);

  return (
    <div className={classes.root}>
      <Switch>
        {userId && <Route path="/chat/:room" component={Chat} />}
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
