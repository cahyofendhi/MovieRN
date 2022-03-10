import {ActionCreator} from 'redux';
import {MovieData} from '../../model/movie.model';
import {movieService} from '../../services';
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
    return movieService
      .getMovieList('tv', 'on_the_air')
      .then(response => {
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
    return movieService
      .getMovieList('tv', 'popular')
      .then(response => {
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
    return movieService
      .getMovieList('tv', 'top_rated')
      .then(response => {
        dispatch(updateTopTvSuccess(response.results));
      })
      .catch((reason: any) => {
        console.log('errorrr ' + {reason});
      });
  };
}
