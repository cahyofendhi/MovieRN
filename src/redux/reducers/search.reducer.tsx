/* eslint-disable require-jsdoc */
import {MovieData} from '../../model/movie.model';
import {
  FETCH_LOAD_SEARCH_MOVIE,
  FETCH_SEARCH_MOVIE,
  SearcActionType,
  UPDATE_LOAD_ERROR_SEARCH_MOVIE,
  UPDATE_LOAD_MORE_SEARCH_MOVIE,
  UPDATE_SEARCH_ERROR,
  UPDATE_SEARCH_MOVIE} from '../types';

interface SearchState {
  page: number;
  totalPage: number;
  nextPage: number;
  movies: MovieData[];
  isRefresh: boolean,
  isLoad: boolean,
  isLoadEnd: boolean,
  loadError?: string | null
  refreshError?: string | null
}

const initialState: SearchState = {
  page: 1,
  totalPage: 1,
  nextPage: 1,
  movies: [],
  isRefresh: false,
  isLoad: false,
  isLoadEnd: false,
  loadError: null,
  refreshError: null,
};

export function searchReducer(
    state: SearchState = initialState,
    action: SearcActionType,
): SearchState {
  switch (action.type) {
    case UPDATE_SEARCH_MOVIE: {
      return {
        ...state,
        movies: action.payload.results,
        page: action.payload.page,
        nextPage: (action.payload.total_pages != action.payload.page) ? action.payload.page + 1 : 0,
        totalPage: action.payload.total_pages,
        isRefresh: false,
      };
    }
    case UPDATE_LOAD_MORE_SEARCH_MOVIE: {
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        page: action.payload.page,
        nextPage: (action.payload.total_pages != action.payload.page) ? action.payload.page + 1 : 0,
        totalPage: action.payload.total_pages,
        isLoad: false,
        isLoadEnd: action.payload.total_pages == action.payload.page,
      };
    }
    case UPDATE_SEARCH_ERROR: {
      return {
        ...state,
        refreshError: action.payload,
      };
    }
    case UPDATE_LOAD_ERROR_SEARCH_MOVIE: {
      return {
        ...state,
        loadError: action.payload,
      };
    }
    case FETCH_SEARCH_MOVIE: {
      return {
        ...state,
        isRefresh: true,
      };
    }
    case FETCH_LOAD_SEARCH_MOVIE: {
      return {
        ...state,
        isLoad: true,
      };
    }
    default:
      return state;
  }
}
