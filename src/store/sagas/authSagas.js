import { put, takeEvery } from 'redux-saga/effects';

import { AUTH } from '../constants';
import { signUpSuccess, signUpFail, logInSuccess, logInFail } from '../actions';
import { auth } from '../../firebase';

function* handleSignUp({ payload: { email, password, name } }) {
  try {
    const {
      user: { uid },
    } = yield auth.createUserWithEmailAndPassword(email, password);
    yield auth.currentUser.updateProfile({
      displayName: name,
    });
    console.log(auth.currentUser);
    yield put(signUpSuccess({ email, password, name, userId: uid }));
  } catch (error) {
    yield put(signUpFail(error.message));
  }
}

function* handleLogIn({ payload: { email, password } }) {
  try {
    const {
      user: { displayName, uid },
    } = yield auth.signInWithEmailAndPassword(email, password);
    yield put(logInSuccess({ email, name: displayName, userId: uid }));
  } catch (error) {
    yield put(logInFail(error));
  }
}

function* setSignUp() {
  yield takeEvery(AUTH.SIGN_UP, handleSignUp);
}

function* setLogIn() {
  yield takeEvery(AUTH.LOG_IN, handleLogIn);
}

export { setSignUp, setLogIn };
