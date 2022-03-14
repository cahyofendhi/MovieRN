/* eslint-disable require-jsdoc */
import {MovieData} from '../../model/movie.model';
import {
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_MOVIES,
  FETCH_UPCOMING_MOVIES,
  MovieActionType,
  UPDATE_POPULAR_MOVIES,
  UPDATE_TOP_MOVIES,
  UPDATE_UPCOMING_MOVIES,
} from '../types';

interface HomeMovieState {
  upcomingMovie: MovieData[];
  popularMovie: MovieData[];
  topMovie: MovieData[];
  isUpcomingRequest: boolean,
  isPopularRequest: boolean,
  isTopRequest: boolean,
}

const initialState: HomeMovieState = {
  upcomingMovie: [],
  popularMovie: [],
  topMovie: [],
  isUpcomingRequest: false,
  isPopularRequest: false,
  isTopRequest: false,
};

export function homeMovieReducer(
    state: HomeMovieState = initialState,
    action: MovieActionType,
): HomeMovieState {
  switch (action.type) {
    case UPDATE_UPCOMING_MOVIES: {
      return {
        ...state,
        upcomingMovie: action.payload,
        isUpcomingRequest: false,
      };
    }
    case UPDATE_POPULAR_MOVIES: {
      return {
        ...state,
        popularMovie: action.payload,
        isPopularRequest: false,
      };
    }
    case UPDATE_TOP_MOVIES: {
      return {
        ...state,
        topMovie: action.payload,
        isTopRequest: false,
      };
    }
    case FETCH_UPCOMING_MOVIES: {
      return {
        ...state,
        isUpcomingRequest: true,
      };
    }
    case FETCH_POPULAR_MOVIES: {
      return {
        ...state,
        isPopularRequest: true,
      };
    }
    case FETCH_TOP_MOVIES: {
      return {
        ...state,
        isTopRequest: true,
      };
    }

    default:
      return state;
  }
}
