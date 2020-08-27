import { all } from 'redux-saga/effects';

import { setSignUp, setLogIn } from './authSagas';
import { setAddMessage } from './messagesSagas';
import { setAddRoom, setDeleteRoom } from './roomsSagas';

function* rootSaga() {
  yield all([
    setSignUp(),
    setLogIn(),
    setAddMessage(),
    setAddRoom(),
    setDeleteRoom(),
  ]);
}

export default rootSaga;
