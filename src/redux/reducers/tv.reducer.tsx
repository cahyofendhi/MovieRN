/* eslint-disable require-jsdoc */
import {MovieData} from '../../model/movie.model';
import {
  FETCH_LATEST_TV,
  FETCH_POPULAR_TV,
  FETCH_TOP_TV,
  TvActionType,
  UPDATE_LATEST_TV,
  UPDATE_POPULAR_TV,
  UPDATE_TOP_TV,
} from '../types';

interface TvMovieState {
  latestMovie: MovieData[];
  popularMovie: MovieData[];
  topMovie: MovieData[];
  isLatestRequest: boolean,
  isPopularRequest: boolean,
  isTopRequest: boolean,
}

const initialState: TvMovieState = {
  latestMovie: [],
  popularMovie: [],
  topMovie: [],
  isLatestRequest: false,
  isPopularRequest: false,
  isTopRequest: false,
};

export function tvMovieReducer(
    state: TvMovieState = initialState,
    action: TvActionType,
): TvMovieState {
  switch (action.type) {
    case UPDATE_LATEST_TV: {
      return {
        ...state,
        latestMovie: action.payload,
        isLatestRequest: false,
      };
    }
    case UPDATE_POPULAR_TV: {
      return {
        ...state,
        popularMovie: action.payload,
        isPopularRequest: false,
      };
    }
    case UPDATE_TOP_TV: {
      return {
        ...state,
        topMovie: action.payload,
        isTopRequest: false,
      };
    }
    case FETCH_LATEST_TV: {
      return {
        ...state,
        isLatestRequest: true,
      };
    }
    case FETCH_POPULAR_TV: {
      return {
        ...state,
        isPopularRequest: true,
      };
    }
    case FETCH_TOP_TV: {
      return {
        ...state,
        isTopRequest: true,
      };
    }
    default:
      return state;
  }
}
