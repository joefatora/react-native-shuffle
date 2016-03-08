import * as types from './actionTypes';

export function signIn() {
  return {
    type: types.SIGN_UP
  };
}

export function signUp() {
  return {
    type: types.SIGN_IN
  };
}

export function createGame(id) {
  return {
    type: types.CREATE_GAME
  };
}

export function joinGame(id) {
  return {
    type: types.JOIN_GAME
  };
}