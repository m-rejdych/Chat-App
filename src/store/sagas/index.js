import { all } from 'redux-saga/effects';

import { setSignUp, setLogIn } from './authSagas';
import { setAddMessage } from './messagesSagas';
import { setAddRoom } from './roomsSagas';

function* rootSaga() {
  yield all([setSignUp(), setLogIn(), setAddMessage(), setAddRoom()]);
}

export default rootSaga;
