import { takeEvery, put } from 'redux-saga/effects';

import { MESSAGES } from '../constants';
import {
  addMessageSuccess,
  addMessageFail,
  getMessagesSuccess,
  getMessagesFail,
} from '../actions';
import { db } from '../../firebase';

function* handleAddMessage({ payload: { collection, message } }) {
  try {
    yield db.collection(collection).add(message);
    yield put(addMessageSuccess(message));
  } catch (error) {
    yield put(addMessageFail(error.message));
  }
}

function* setAddMessage() {
  yield takeEvery(MESSAGES.ADD_MESSAGE, handleAddMessage);
}

export { setAddMessage };
