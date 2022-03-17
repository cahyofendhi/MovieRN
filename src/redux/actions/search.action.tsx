/* eslint-disable require-jsdoc */
import {ActionCreator} from 'redux';
import {GroupMovie, MovieResponse} from '../../model/movie.model';
import {movieService} from '../../services';
import {
  FETCH_LOAD_SEARCH_MOVIE,
  FETCH_SEARCH_MOVIE,
  SearcActionType,
  UPDATE_LOAD_ERROR_SEARCH_MOVIE,
  UPDATE_LOAD_MORE_SEARCH_MOVIE,
  UPDATE_SEARCH_ERROR,
  UPDATE_SEARCH_MOVIE,
} from '../types';

const fetchSearchMovie: ActionCreator<SearcActionType> = () => {
  return {
    type: FETCH_SEARCH_MOVIE,
  };
};

const fetchLoadSearchMovie: ActionCreator<SearcActionType> = () => {
  return {
    type: FETCH_LOAD_SEARCH_MOVIE,
  };
};

const updateLoadSearchError: ActionCreator<SearcActionType> = (message: string) => {
  return {
    type: UPDATE_LOAD_ERROR_SEARCH_MOVIE,
    payload: message,
  };
};

const updateSearchMovieSuccess: ActionCreator<SearcActionType> = (
    movie: MovieResponse,
) => {
  return {
    type: UPDATE_SEARCH_MOVIE,
    payload: movie,
  };
};

const updateLoadSearchMovieSuccess: ActionCreator<SearcActionType> = (
    movie: MovieResponse,
) => {
  return {
    type: UPDATE_LOAD_MORE_SEARCH_MOVIE,
    payload: movie,
  };
};

const updateSearchMovieError: ActionCreator<SearcActionType> = (
    message: string,
) => {
  return {
    type: UPDATE_SEARCH_ERROR,
    payload: message,
  };
};

export function updateSearchMovie(query: string, page: number, group: GroupMovie) {
  return (dispatch: (arg0: SearcActionType) => void) => {
    dispatch(page == 1 ? fetchSearchMovie() : fetchLoadSearchMovie());
    console.log('PAGE : '+page);
    return movieService
        .searchMovie(group, query, page)
        .then((response) => {
          dispatch(page == 1 ? updateSearchMovieSuccess(response) : updateLoadSearchMovieSuccess(response));
        })
        .catch((reason) => {
          const str = JSON.stringify(reason);
          console.log('errorrr search  ' + str);
          if (page == 1) {
            dispatch(updateSearchMovieError(str));
          } else {
            dispatch(updateLoadSearchError(str));
          }
        });
  };
}
