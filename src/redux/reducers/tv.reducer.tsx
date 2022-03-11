import {MovieData} from '../../model/movie.model';
import {
  TvActionType,
  UPDATE_LATEST_TV,
  UPDATE_POPULAR_TV,
  UPDATE_TOP_TV,
} from '../types';

interface TvMovieState {
  latestMovie: MovieData[];
  popularMovie: MovieData[];
  topMovie: MovieData[];
}

const initialState: TvMovieState = {
  latestMovie: [],
  popularMovie: [],
  topMovie: [],
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
      };
    }
    case UPDATE_POPULAR_TV: {
      return {
        ...state,
        popularMovie: action.payload,
      };
    }
    case UPDATE_TOP_TV: {
      return {
        ...state,
        topMovie: action.payload,
      };
    }
    default:
      return state;
  }
}
