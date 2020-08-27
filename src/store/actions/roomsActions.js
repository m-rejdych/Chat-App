import { ROOMS } from '../constants';

const setRooms = (rooms) => ({
  type: ROOMS.SET_ROOMS,
  payload: rooms,
});

const addRoom = (room) => ({
  type: ROOMS.ADD_ROOM,
  payload: room,
});

const addRoomSuccess = (room) => ({
  type: ROOMS.ADD_ROOM_SUCCESS,
  payload: room,
});

const addRoomFail = (error) => ({
  type: ROOMS.ADD_ROOM_FAIL,
  payload: error,
});

const deleteRoom = (id) => ({
  type: ROOMS.DELETE_ROOM,
  payload: id,
});

const deleteRoomSuccess = (id) => ({
  type: ROOMS.DELETE_ROOM_SUCCESS,
  payload: id,
});

const deleteRoomFail = (error) => ({
  type: ROOMS.DELETE_ROOM_FAIL,
  payload: error,
});

export {
  setRooms,
  addRoom,
  addRoomSuccess,
  addRoomFail,
  deleteRoom,
  deleteRoomSuccess,
  deleteRoomFail,
};
