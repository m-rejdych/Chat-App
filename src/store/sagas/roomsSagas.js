import { put, takeEvery } from 'redux-saga/effects';

import { ROOMS } from '../constants';
import { addRoomSuccess, addRoomFail } from '../actions';
import { db } from '../../firebase';

function* handleAddRoom({ payload }) {
  try {
    yield db.collection('rooms').add(payload);
    yield put(addRoomSuccess(payload));
  } catch (error) {
    yield put(addRoomFail(error.message));
  }
}

function* setAddRoom() {
  yield takeEvery(ROOMS.ADD_ROOM, handleAddRoom);
}

export { setAddRoom };
