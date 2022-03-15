/* eslint-disable require-jsdoc */
import {FECTH_USER_STATUS_MAIN, MainActionType, UPDATE_USER_STATUS_MAIN} from '../types';

interface MainMovieState {
  isRequest: boolean,
  isLogin: boolean;
}

const initialState: MainMovieState = {
  isRequest: false,
  isLogin: false,
};

export function mainReducer(
    state: MainMovieState = initialState,
    action: MainActionType,
): MainMovieState {
  switch (action.type) {
    case FECTH_USER_STATUS_MAIN: {
      return {
        ...state,
        isRequest: true,
      };
    }
    case UPDATE_USER_STATUS_MAIN: {
      return {
        ...state,
        isRequest: false,
        isLogin: action.payload,
      };
    }
    default:
      return state;
  }
}
