// GAMEPLAY REDUCER

import {
  SCORE,
  DECREMENT,
  ACTIVE_ID,
  GAME_ON,
  RESET,
  // DB_MODAL,
  SHOW_MODAL,
  USER,
  SHOW_POP_UP,
  DB_SCORES,
} from '.././actions/types';

const initialState = {
  time: 30,
  score: 0,
  activeID: 0,
  gameOn: false,
  showModal: false,
  showPopUp: false,
  user:{},
  db_scores: [],
};

const gamePlay = (state = initialState, action) => {
  switch (action.type) {
    case SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case SHOW_POP_UP:
      return {
        ...state,
        showPopUp: !state.showPopUp,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        time: state.time - 1,
      };
    case ACTIVE_ID:
      return {
        ...state,
        activeID: action.payload,
      };
    case GAME_ON:
      return {
        ...state,
        gameOn: !state.gameOn,
      };
    case RESET:
      return {
        ...state,
        time: 30,
        score: 0,
      };
    case DB_SCORES:
      return {
        ...state,
        db_scores: action.payload,
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};

export default gamePlay;
