import { all } from 'redux-saga/effects';

import { setSignUp, setLogIn } from './authSagas';
import { setAddMessage } from './messagesSagas';

function* rootSaga() {
  yield all([setSignUp(), setLogIn(), setAddMessage()]);
}

export default rootSaga;
