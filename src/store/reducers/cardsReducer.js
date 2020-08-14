import { CARDS } from '../constants';

const initialState = {
  userAuth: false,
  guestAuth: false,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDS.SET_USER_AUTH:
      return { ...state, guestAuth: false, userAuth: true };
    case CARDS.SET_GUEST_AUTH:
      return { ...state, userAuth: false, guestAuth: true };
    default:
      return state;
  }
};

export default cardsReducer;
