import { MESSAGES } from '../constants';

const initialState = {
  messages: [],
  rooms: [],
  loading: false,
  error: null,
};

const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MESSAGES.ADD_MESSAGE:
      return { ...state, loading: true };
    case MESSAGES.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case MESSAGES.ADD_MESSAGE_FAIL:
      return { ...state, loading: false, error: payload };
    case MESSAGES.SET_MESSAGES:
      return { ...state, messages: payload };
    default:
      return state;
  }
};

export default messagesReducer;
