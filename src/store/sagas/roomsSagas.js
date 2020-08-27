import { put, takeEvery } from 'redux-saga/effects';

import { ROOMS } from '../constants';
import {
  addRoomSuccess,
  addRoomFail,
  deleteRoomSuccess,
  deleteRoomFail,
} from '../actions';
import { db } from '../../firebase';

function* handleAddRoom({ payload }) {
  try {
    yield db.collection('rooms').add(payload);
    yield put(addRoomSuccess(payload));
  } catch (error) {
    yield put(addRoomFail(error.message));
  }
}

function* handleDeleteRoom({ payload }) {
  try {
    let roomToDelete;
    const response = yield db.collection('rooms').get();
    yield response.forEach((doc) => {
      const room = doc.data();
      if (room.id === payload) {
        doc.ref.delete();
        roomToDelete = doc.data().name;
      }
    });
    const roomData = yield db.collection(roomToDelete).get();
    yield roomData.forEach((doc) => doc.ref.delete());
    yield put(deleteRoomSuccess(payload));
  } catch (error) {
    yield put(deleteRoomFail(error.message));
  }
}

function* setAddRoom() {
  yield takeEvery(ROOMS.ADD_ROOM, handleAddRoom);
}

function* setDeleteRoom() {
  yield takeEvery(ROOMS.DELETE_ROOM, handleDeleteRoom);
}

export { setAddRoom, setDeleteRoom };
