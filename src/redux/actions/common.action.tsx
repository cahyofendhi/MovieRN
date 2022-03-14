import {ActionCreator} from 'redux';
import {
  FetchActionTVTypes,
  FetchActionTypes,
  FETCH_LATEST_TV,
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_TV,
  FETCH_TOP_MOVIES,
  FETCH_TOP_TV,
  FETCH_UPCOMING_MOVIES,
} from '../types';

export const upcomingMovieRequest: ActionCreator<FetchActionTypes> = () => {
  return {type: FETCH_UPCOMING_MOVIES};
};
export const popularMovieRequest: ActionCreator<FetchActionTypes> = () => {
  return {type: FETCH_POPULAR_MOVIES};
};
export const topMovieRequest: ActionCreator<FetchActionTypes> = () => {
  return {type: FETCH_TOP_MOVIES};
};

export const latestTvRequest: ActionCreator<FetchActionTVTypes> = () => {
  return {type: FETCH_LATEST_TV};
};
export const popularTvRequest: ActionCreator<FetchActionTVTypes> = () => {
  return {type: FETCH_POPULAR_TV};
};
export const topTvRequest: ActionCreator<FetchActionTVTypes> = () => {
  return {type: FETCH_TOP_TV};
};
