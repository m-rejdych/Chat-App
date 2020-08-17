import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  auth: authReducer,
});

export default rootReducer;
