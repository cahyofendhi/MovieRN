import {Crew} from '../../model/crews.model';
import {MovieData} from '../../model/movie.model';
import {FetchActionTypes} from './common.types';

export const UPDATE_TV_MOVIE = 'UPDATE_TV_MOVIE';
export const UPDATE_CREW_TV_MOVIES = 'UPDATE_CREW_TV_MOVIES';
export const UPDATE_SIMILIAR_TV_MOVIES = 'UPDATE_SIMILIAR_TV_MOVIES';

export const FETCH_CREWS_TV_MOVIES = 'FETCH_CREWS_TV_MOVIES';
export const FETCH_SIMILIAR_TV_MOVIES = 'FETCH_SIMILIAR_TV_MOVIES';

interface FetchCrewsTVAction {
  type: typeof FETCH_CREWS_TV_MOVIES;
}

interface FetchSimiliarTVAction {
  type: typeof FETCH_SIMILIAR_TV_MOVIES;
}


interface UpdateTVAction {
  type: typeof UPDATE_TV_MOVIE;
  payload: MovieData;
}

interface UpdateCrewTVAction {
  type: typeof UPDATE_CREW_TV_MOVIES;
  payload: Crew[];
}

interface UpdateSimiliarTVAction {
    type: typeof UPDATE_SIMILIAR_TV_MOVIES;
    payload: MovieData[];
  }


export type DetailTVActionType =
  | FetchCrewsTVAction
  | FetchSimiliarTVAction
  | UpdateTVAction
  | UpdateCrewTVAction
  | UpdateSimiliarTVAction
  | FetchActionTypes;


