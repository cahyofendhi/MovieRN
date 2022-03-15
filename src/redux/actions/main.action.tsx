/* eslint-disable require-jsdoc */
import {ActionCreator} from 'redux';
import {getItem, sessionLoginKey} from '../../data/session';
import {
  FECTH_USER_STATUS_MAIN,
  MainActionType, UPDATE_USER_STATUS_MAIN,
} from '../types';

const updateUserStatusMain: ActionCreator<MainActionType> = (
    isLogin: boolean,
) => {
  return {type: UPDATE_USER_STATUS_MAIN, payload: isLogin};
};

const fetchUserStatusMain: ActionCreator<MainActionType> = () => {
  return {type: FECTH_USER_STATUS_MAIN};
};


export function getUserStatus() {
  return (dispatch: (arg0: MainActionType) => void) => {
    dispatch(fetchUserStatusMain());
    return getItem(sessionLoginKey)
        .then((response) => {
          dispatch(updateUserStatusMain(response));
        })
        .catch((reason) => {
          dispatch(updateUserStatusMain(false));
        });
  };
}
