import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import authReducer from './authReducer';
import messagesReducer from './messagesReducer';
import roomsReducer from './roomsReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  auth: authReducer,
  messages: messagesReducer,
  rooms: roomsReducer,
});

export default rootReducer;
