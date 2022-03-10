import {ActionCreator} from 'redux';
import {MovieData} from '../../model/movie.model';
import {movieService} from '../../services';
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
    return movieService
      .getMovieList('movie', 'upcoming')
      .then(response => {
        dispatch(updateUpcomingMovieSuccess(response.results));
      })
      .catch((reason: any) => {
        console.log('errorrr ' + {reason});
      });
  };
}

export function updatePopularMovie() {
  return (dispatch: (arg0: MovieActionType | FetchActionTypes) => void) => {
    dispatch(popularMovieRequest());
    return movieService
      .getMovieList('movie', 'popular')
      .then(response => {
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
    return movieService
      .getMovieList('movie', 'top_rated')
      .then(response => {
        dispatch(updateTopMovieSuccess(response.results));
      })
      .catch((reason: any) => {
        console.log('errorrr ' + {reason});
      });
  };
}
