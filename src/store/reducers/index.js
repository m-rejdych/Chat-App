import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import authReducer from './authReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  auth: authReducer,
  messages: messagesReducer,
});

export default rootReducer;
