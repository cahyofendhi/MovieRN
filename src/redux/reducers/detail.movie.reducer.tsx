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
  isCrewLoading: Boolean;
  isSimiliarLoading: Boolean,
}

const initialState: DetailMovieState = {
  movie: null,
  crews: [],
  similiarMovie: [],
  isCrewLoading: true,
  isSimiliarLoading: true,
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
      };
    }
    case UPDATE_SIMILIAR_MOVIES: {
      return {
        ...state,
        similiarMovie: action.payload,
      };
    }
    case FETCH_CREWS_MOVIES: {
      return {
        ...state,
        isCrewLoading: true,
      };
    }
    case FETCH_SIMILIAR_MOVIES: {
      return {
        ...state,
        isSimiliarLoading: true,
      };
    }
    default:
      return {
        ...state,
        isCrewLoading: false,
        isSimiliarLoading: false,
      };
  }
}
