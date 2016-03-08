import * as types from '../actions/actionTypes';
import _ from 'underscore';


const initialState = {
  gameInProgess: false,
  loggedIn: false,
  gameID: null
};

export default function recipes(state = initialState, action = {}) {
  console.log(state, action);
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        loggedIn: true
      };
    case types.SIGN_IN:
      return {
        ...state,
        loggedIn: true
      };
    case types.CREATE_GAME:
      return {
        ...state,
        gameID: action.gameID,
        gameInProgess: true
      };
    case types.JOIN_GAME:
      return {
        ...state,
        gameID: action.gameID
      };
    default:
      return state;
  }
}
