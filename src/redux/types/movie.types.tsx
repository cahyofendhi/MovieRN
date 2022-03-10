import {MovieData} from '../../model/moviemodel';

export const UPDATE_UPCOMING_MOVIES = 'UPDATE_UPCOMING_MOVIES';
export const UPDATE_POPULAR_MOVIES = 'UPDATE_POPULAR_MOVIES';
export const UPDATE_TOP_MOVIES = 'UPDATE_TOP_MOVIES';

interface UpdateUpcomingMovieAction {
  type: typeof UPDATE_UPCOMING_MOVIES;
  payload: MovieData[];
}

interface UpdatePopularMovieAction {
  type: typeof UPDATE_POPULAR_MOVIES;
  payload: MovieData[];
}

interface UpdateTopMovieAction {
  type: typeof UPDATE_TOP_MOVIES;
  payload: MovieData[];
}

export type MovieActionType =
  | UpdateUpcomingMovieAction
  | UpdatePopularMovieAction
  | UpdateTopMovieAction;
