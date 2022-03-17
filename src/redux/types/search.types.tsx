import {MovieResponse} from '../../model/movie.model';

export const FETCH_SEARCH_MOVIE = 'FETCH_SEARCH_MOVIE';
export const FETCH_LOAD_SEARCH_MOVIE = 'FETCH_LOAD_SEARCH_MOVIE';
export const UPDATE_LOAD_ERROR_SEARCH_MOVIE = 'UPDATE_LOAD_ERROR_SEARCH_MOVIE';
export const UPDATE_SEARCH_MOVIE = 'UPDATE_SEARCH_MOVIE';
export const UPDATE_LOAD_MORE_SEARCH_MOVIE = 'UPDATE_LOAD_MORE_SEARCH_MOVIE';
export const UPDATE_SEARCH_ERROR = 'UPDATE_SEARCH_ERROR';

interface UpdateSearchMovie {
  type: typeof UPDATE_SEARCH_MOVIE;
  payload: MovieResponse;
}

interface UpdateLoadMoreSearchMovie {
  type: typeof UPDATE_LOAD_MORE_SEARCH_MOVIE;
  payload: MovieResponse;
}

interface FetchSearchMovie {
  type: typeof FETCH_SEARCH_MOVIE;
}

interface FetchLoadSearchMovie {
  type: typeof FETCH_LOAD_SEARCH_MOVIE;
}

interface UpdateLoadErrorMovie {
  type: typeof UPDATE_LOAD_ERROR_SEARCH_MOVIE;
  payload: string;
}

interface UpdateSearchError {
  type: typeof UPDATE_SEARCH_ERROR;
  payload: string
}

export type SearcActionType =
  | UpdateSearchMovie
  | UpdateLoadMoreSearchMovie
  | UpdateSearchError
  | UpdateLoadErrorMovie
  | FetchSearchMovie
  | FetchLoadSearchMovie;
