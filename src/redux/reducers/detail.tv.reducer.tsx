/* eslint-disable require-jsdoc */
import {Crew} from '../../model/crews.model';
import {MovieData} from '../../model/movie.model';
import {
  DetailTVActionType,
  FETCH_CREWS_TV_MOVIES,
  FETCH_SIMILIAR_TV_MOVIES,
  UPDATE_CREW_TV_MOVIES,
  UPDATE_SIMILIAR_TV_MOVIES,
  UPDATE_TV_MOVIE} from '../types';

interface DetailTVState {
  movie: MovieData | null;
  crews: Crew[];
  similiarMovie: MovieData[];
  isCrewRequest: boolean;
  isSimiliarRequest: boolean,
}

const initialState: DetailTVState = {
  movie: null,
  crews: [],
  similiarMovie: [],
  isCrewRequest: true,
  isSimiliarRequest: true,
};

export function detailTVReducer(
    state: DetailTVState = initialState,
    action: DetailTVActionType,
): DetailTVState {
  switch (action.type) {
    case UPDATE_TV_MOVIE: {
      return {
        ...state,
        movie: action.payload,
      };
    }
    case UPDATE_CREW_TV_MOVIES: {
      return {
        ...state,
        crews: action.payload,
        isCrewRequest: false,
      };
    }
    case UPDATE_SIMILIAR_TV_MOVIES: {
      return {
        ...state,
        similiarMovie: action.payload,
        isSimiliarRequest: false,
      };
    }
    case FETCH_CREWS_TV_MOVIES: {
      return {
        ...state,
        isCrewRequest: true,
      };
    }
    case FETCH_SIMILIAR_TV_MOVIES: {
      return {
        ...state,
        isSimiliarRequest: true,
      };
    }
    default:
      return state;
  }
}
