import { AUTH } from '../constants';

const signUp = (userData) => ({
  type: AUTH.SIGN_UP,
  payload: userData,
});
const signUpSuccess = (userData) => ({
  type: AUTH.SIGN_UP_SUCCESS,
  payload: userData,
});
const signUpFail = (error) => ({
  type: AUTH.SIGN_UP_FAIL,
  payload: error,
});
const logIn = (userData) => ({
  type: AUTH.LOG_IN,
  payload: userData,
});
const logInSuccess = (userData) => ({
  type: AUTH.LOG_IN_SUCCESS,
  payload: userData,
});
const logInFail = (error) => ({
  type: AUTH.LOG_IN_FAIL,
  paylaod: error,
});
const guestLogIn = (name) => ({
  type: AUTH.GUEST_LOG_IN,
  payload: name,
});

export {
  signUp,
  signUpSuccess,
  signUpFail,
  logIn,
  logInSuccess,
  logInFail,
  guestLogIn,
};
