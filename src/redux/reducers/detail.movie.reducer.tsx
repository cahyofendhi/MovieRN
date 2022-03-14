/* eslint-disable require-jsdoc */
import {Crew} from '../../model/crews.model';
import {MovieData} from '../../model/movie.model';
import {
  DetailMovieActionType,
  FETCH_CREWS_MOVIES,
  FETCH_SIMILIAR_MOVIES,
  UPDATE_CREW_MOVIES,
  UPDATE_MOVIE,
  UPDATE_SIMILIAR_MOVIES} from '../types';

interface DetailMovieState {
  movie: MovieData | null;
  crews: Crew[];
  similiarMovie: MovieData[];
  isCrewRequest: boolean;
  isSimiliarRequest: boolean,
}

const initialState: DetailMovieState = {
  movie: null,
  crews: [],
  similiarMovie: [],
  isCrewRequest: true,
  isSimiliarRequest: true,
};

export function detailMovieReducer(
    state: DetailMovieState = initialState,
    action: DetailMovieActionType,
): DetailMovieState {
  switch (action.type) {
    case UPDATE_MOVIE: {
      return {
        ...state,
        movie: action.payload,
      };
    }
    case UPDATE_CREW_MOVIES: {
      return {
        ...state,
        crews: action.payload,
        isCrewRequest: false,
      };
    }
    case UPDATE_SIMILIAR_MOVIES: {
      return {
        ...state,
        similiarMovie: action.payload,
        isSimiliarRequest: false,
      };
    }
    case FETCH_CREWS_MOVIES: {
      return {
        ...state,
        isCrewRequest: true,
      };
    }
    case FETCH_SIMILIAR_MOVIES: {
      return {
        ...state,
        isSimiliarRequest: true,
      };
    }
    default:
      return state;
  }
}
