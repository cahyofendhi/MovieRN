import {MovieData} from '../../model/movie.model';

export const UPDATE_LATEST_TV = 'UPDATE_LATEST_TV';
export const UPDATE_POPULAR_TV = 'UPDATE_POPULAR_TV';
export const UPDATE_TOP_TV = 'UPDATE_TOP_TV';

interface UpdateLatestTvAction {
  type: typeof UPDATE_LATEST_TV;
  payload: MovieData[];
}

interface UpdatePopularTvAction {
  type: typeof UPDATE_POPULAR_TV;
  payload: MovieData[];
}

interface UpdateTopTvAction {
  type: typeof UPDATE_TOP_TV;
  payload: MovieData[];
}

export type TvActionType =
  | UpdateLatestTvAction
  | UpdatePopularTvAction
  | UpdateTopTvAction;
