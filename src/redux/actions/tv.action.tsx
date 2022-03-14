/* eslint-disable require-jsdoc */
import {ActionCreator} from 'redux';
import {MovieData} from '../../model/movie.model';
import {movieService} from '../../services';
import {getMoviesDB, saveMovieDB} from '../../services/db/movie.scheme';
import {
  FetchActionTypes,
  TvActionType,
  UPDATE_LATEST_TV,
  UPDATE_POPULAR_TV,
  UPDATE_TOP_TV,
} from '../types';
import {latestTvRequest, popularTvRequest, topTvRequest} from './common.action';

const updateLatestTvSuccess: ActionCreator<TvActionType> = (
    movies: MovieData[],
) => {
  return {type: UPDATE_LATEST_TV, payload: movies};
};

const updatePopularTvSuccess: ActionCreator<TvActionType> = (
    movies: MovieData[],
) => {
  return {type: UPDATE_POPULAR_TV, payload: movies};
};

const updateTopTvSuccess: ActionCreator<TvActionType> = (
    movies: MovieData[],
) => {
  return {type: UPDATE_TOP_TV, payload: movies};
};

export function updateLatestTv() {
  return (dispatch: (arg0: TvActionType | FetchActionTypes) => void) => {
    dispatch(latestTvRequest());
    const resultDB = getMoviesDB('on_the_air', 'tv');
    if (resultDB.length > 0) {
      dispatch(updateLatestTvSuccess(resultDB));
    }
    return movieService
        .getMovieList('tv', 'on_the_air')
        .then((response) => {
          saveMovieDB(response.results, 'on_the_air', 'tv');
          dispatch(updateLatestTvSuccess(response.results));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}

export function updatePopularTv() {
  return (dispatch: (arg0: TvActionType | FetchActionTypes) => void) => {
    dispatch(popularTvRequest());
    const resultDB = getMoviesDB('popular', 'tv');
    if (resultDB.length > 0) {
      dispatch(updatePopularTvSuccess(resultDB));
    }
    return movieService
        .getMovieList('tv', 'popular')
        .then((response) => {
          saveMovieDB(response.results, 'popular', 'tv');
          dispatch(updatePopularTvSuccess(response.results));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}

export function updateTopTv() {
  return (dispatch: (arg0: TvActionType | FetchActionTypes) => void) => {
    dispatch(topTvRequest());
    const resultDB = getMoviesDB('top_rated', 'tv');
    if (resultDB.length > 0) {
      dispatch(updateTopTvSuccess(resultDB));
    }
    return movieService
        .getMovieList('tv', 'top_rated')
        .then((response) => {
          saveMovieDB(response.results, 'top_rated', 'tv');
          dispatch(updateTopTvSuccess(response.results));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}
