// COMBINED REDUCERS 

import { combineReducers } from 'redux';
import gamePlay from './gamePlay';

export default combineReducers({
  game: gamePlay,
});
