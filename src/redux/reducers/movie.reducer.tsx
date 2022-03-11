/* eslint-disable require-jsdoc */
import {MovieData} from '../../model/movie.model';
import {
  MovieActionType,
  UPDATE_POPULAR_MOVIES,
  UPDATE_TOP_MOVIES,
  UPDATE_UPCOMING_MOVIES,
} from '../types';

interface HomeMovieState {
  upcomingMovie: MovieData[];
  popularMovie: MovieData[];
  topMovie: MovieData[];
}

const initialState: HomeMovieState = {
  upcomingMovie: [],
  popularMovie: [],
  topMovie: [],
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
      };
    }
    case UPDATE_POPULAR_MOVIES: {
      return {
        ...state,
        popularMovie: action.payload,
      };
    }
    case UPDATE_TOP_MOVIES: {
      return {
        ...state,
        topMovie: action.payload,
      };
    }
    default:
      return state;
  }
}
