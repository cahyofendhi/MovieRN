/* eslint-disable require-jsdoc */
import {ActionCreator} from 'redux';
import {Crew} from '../../model/crews.model';
import {MovieData} from '../../model/movie.model';
import {movieService} from '../../services';
import {
  DetailTVActionType,
  FETCH_CREWS_TV_MOVIES,
  FETCH_SIMILIAR_TV_MOVIES,
  UPDATE_CREW_TV_MOVIES,
  UPDATE_SIMILIAR_TV_MOVIES,
  UPDATE_TV_MOVIE,
} from '../types';

export const crewsTVRequest: ActionCreator<DetailTVActionType> = () => {
  return {type: FETCH_CREWS_TV_MOVIES};
};
export const similiarTVRequest: ActionCreator<DetailTVActionType> = () => {
  return {type: FETCH_SIMILIAR_TV_MOVIES};
};

const updateTVSuccess: ActionCreator<DetailTVActionType> = (
    movie: MovieData,
) => {
  return {type: UPDATE_TV_MOVIE, payload: movie};
};

const updateCrewsTVSuccess: ActionCreator<DetailTVActionType> = (
    crews: Crew[],
) => {
  return {type: UPDATE_CREW_TV_MOVIES, payload: crews};
};

const updateSimiliarTVSuccess: ActionCreator<DetailTVActionType> = (
    movies: MovieData[],
) => {
  return {type: UPDATE_SIMILIAR_TV_MOVIES, payload: movies};
};

export function updateTV(movie: MovieData) {
  return (dispatch: (arg0: DetailTVActionType) => void) => {
    dispatch(updateTVSuccess(movie));
    return movieService
        .getDetailMovie(movie.id, 'tv')
        .then((response) => {
          dispatch(updateTVSuccess(response));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}

export function updateCrewTV(id: number) {
  return (dispatch: (arg0: DetailTVActionType) => void) => {
    dispatch(crewsTVRequest());
    return movieService
        .getCrewsMovie(id, 'tv')
        .then((response) => {
          dispatch(updateCrewsTVSuccess(response.cast.length ? response.cast : response.crew));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}

export function updateSimiliarTV(id: number) {
  return (dispatch: (arg0: DetailTVActionType) => void) => {
    dispatch(similiarTVRequest());
    return movieService
        .getSimiliarMovie(id, 'tv')
        .then((response) => {
          dispatch(updateSimiliarTVSuccess(response.results));
        })
        .catch((reason: any) => {
          console.log('errorrr ' + {reason});
        });
  };
}

