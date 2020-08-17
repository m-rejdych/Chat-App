import { all } from 'redux-saga/effects';

import { setSignUp, setLogIn } from './authSagas';

function* rootSaga() {
  yield all([setSignUp(), setLogIn()]);
}

export default rootSaga;
