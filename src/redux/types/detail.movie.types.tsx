import {Crew} from '../../model/crews.model';
import {MovieData} from '../../model/movie.model';

export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const UPDATE_CREW_MOVIES = 'UPDATE_CREW_MOVIES';
export const UPDATE_SIMILIAR_MOVIES = 'UPDATE_SIMILIAR_MOVIES';

export const FETCH_CREWS_MOVIES = 'FETCH_CREWS_MOVIES';
export const FETCH_SIMILIAR_MOVIES = 'FETCH_SIMILIAR_MOVIES';

interface FetchCrewsMovieAction {
  type: typeof FETCH_CREWS_MOVIES;
}

interface FetchSimiliarMovieAction {
  type: typeof FETCH_SIMILIAR_MOVIES;
}


interface UpdateMovieAction {
  type: typeof UPDATE_MOVIE;
  payload: MovieData;
}

interface UpdateCrewMovieAction {
  type: typeof UPDATE_CREW_MOVIES;
  payload: Crew[];
}

interface UpdateSimiliarMovieAction {
    type: typeof UPDATE_SIMILIAR_MOVIES;
    payload: MovieData[];
  }


export type DetailMovieActionType =
  | FetchCrewsMovieAction
  | FetchSimiliarMovieAction
  | UpdateMovieAction
  | UpdateCrewMovieAction
  | UpdateSimiliarMovieAction;


