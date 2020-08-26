import { MESSAGES, ROOMS } from '../constants';

const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

const roomsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ROOMS.SET_ROOMS:
      return { ...state, rooms: payload };
    case ROOMS.ADD_ROOM:
      return { ...state, loading: true };
    case ROOMS.ADD_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ROOMS.ADD_ROOM_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default roomsReducer;
