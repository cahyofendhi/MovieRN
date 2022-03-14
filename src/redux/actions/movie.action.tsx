/* eslint-disable require-jsdoc */
import {ActionCreator} from 'redux';
import {MovieData} from '../../model/movie.model';
import {movieService} from '../../services';
import {getMoviesDB, saveMovieDB} from '../../services/db/movie.scheme';
import {
  FetchActionTypes,
  MovieActionType,
  UPDATE_POPULAR_MOVIES,
  UPDATE_TOP_MOVIES,
  UPDATE_UPCOMING_MOVIES,
} from '../types';
import {
  popularMovieRequest,
  topMovieRequest,
  upcomingMovieRequest,
} from './common.action';

const updateUpcomingMovieSuccess: ActionCreator<MovieActionType> = (
    movies: MovieData[],
) => {
  return {type: UPDATE_UPCOMING_MOVIES, payload: movies};
};

const updatePopularMovieSuccess: ActionCreator<MovieActionType> = (
    movies: MovieData[],
) => {
  return {type: UPDATE_POPULAR_MOVIES, payload: movies};
};

const updateTopMovieSuccess: ActionCreator<MovieActionType> = (
    movies: MovieData[],
) => {
  return {type: UPDATE_TOP_MOVIES, payload: movies};
};

export function updateUpcomingMovie() {
  return (dispatch: (arg0: MovieActionType | FetchActionTypes) => void) => {
    dispatch(upcomingMovieRequest());
    const resultDB = getMoviesDB('upcoming', 'movie');
    if (resultDB.length > 0) {
      dispatch(updateUpcomingMovieSuccess(resultDB));
    }
    return movieService
        .getMovieList('movie', 'upcoming')
        .then((response) => {
          saveMovieDB(response.results, 'upcoming', 'movie');
          dispatch(updateUpcomingMovieSuccess(response.results));
        })
        .catch((reason) => {
          const str = JSON.stringify(reason);
          console.log('errorrr upcoming ' + str);
        });
  };
}

export function updatePopularMovie() {
  return (dispatch: (arg0: MovieActionType | FetchActionTypes) => void) => {
    dispatch(popularMovieRequest());
    const resultDB = getMoviesDB('popular', 'movie');
    if (resultDB.length > 0) {
      dispatch(updatePopularMovieSuccess(resultDB));
    }
    return movieService
        .getMovieList('movie', 'popular')
        .then((response) => {
          saveMovieDB(response.results, 'popular', 'movie');
          dispatch(updatePopularMovieSuccess(response.results));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}

export function updateTopMovie() {
  return (dispatch: (arg0: MovieActionType | FetchActionTypes) => void) => {
    dispatch(topMovieRequest());
    const resultDB = getMoviesDB('top_rated', 'movie');
    if (resultDB.length > 0) {
      dispatch(updateTopMovieSuccess(resultDB));
    }
    return movieService
        .getMovieList('movie', 'top_rated')
        .then((response) => {
          saveMovieDB(response.results, 'top_rated', 'movie');
          dispatch(updateTopMovieSuccess(response.results));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}
