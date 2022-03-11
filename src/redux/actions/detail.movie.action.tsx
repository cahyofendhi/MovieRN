/* eslint-disable require-jsdoc */
import {ActionCreator} from 'redux';
import {Crew} from '../../model/crews.model';
import {MovieData} from '../../model/movie.model';
import {movieService} from '../../services';
import {
  DetailMovieActionType,
  FETCH_CREWS_MOVIES,
  FETCH_SIMILIAR_MOVIES,
  UPDATE_CREW_MOVIES,
  UPDATE_MOVIE,
  UPDATE_SIMILIAR_MOVIES,
} from '../types';

export const crewsMovieRequest: ActionCreator<DetailMovieActionType> = () => {
  return {type: FETCH_CREWS_MOVIES};
};
export const similiarMovieRequest: ActionCreator<DetailMovieActionType> = () => {
  return {type: FETCH_SIMILIAR_MOVIES};
};

const updateMovieSuccess: ActionCreator<DetailMovieActionType> = (
    movie: MovieData,
) => {
  return {type: UPDATE_MOVIE, payload: movie};
};

const updateCrewsMovieSuccess: ActionCreator<DetailMovieActionType> = (
    crews: Crew[],
) => {
  return {type: UPDATE_CREW_MOVIES, payload: crews};
};

const updateSimiliarMovieSuccess: ActionCreator<DetailMovieActionType> = (
    movies: MovieData[],
) => {
  return {type: UPDATE_SIMILIAR_MOVIES, payload: movies};
};

export function updateMovie(movie: MovieData) {
  return (dispatch: (arg0: DetailMovieActionType) => void) => {
    dispatch(updateMovieSuccess(movie));
    return movieService
        .getDetailMovie(movie.id, 'movie')
        .then((response) => {
          dispatch(updateMovieSuccess(response));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}

export function updateCrewMovie(id: number) {
  return (dispatch: (arg0: DetailMovieActionType) => void) => {
    dispatch(crewsMovieRequest());
    return movieService
        .getCrewsMovie(id, 'movie')
        .then((response) => {
          dispatch(updateCrewsMovieSuccess(response.crew));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}

export function updateSimiliatMovie(id: number) {
  return (dispatch: (arg0: DetailMovieActionType) => void) => {
    dispatch(similiarMovieRequest());
    return movieService
        .getSimiliarMovie(id, 'movie')
        .then((response) => {
          dispatch(updateSimiliarMovieSuccess(response.results));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}

