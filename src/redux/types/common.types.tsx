export const FETCH_UPCOMING_MOVIES = 'FETCH_UPCOMING_MOVIES';
export const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';
export const FETCH_TOP_MOVIES = 'FETCH_TOP_MOVIES';

export const FETCH_LATEST_TV = 'FETCH_LATEST_TV';
export const FETCH_POPULAR_TV = 'FETCH_POPULAR_TV';
export const FETCH_TOP_TV = 'FETCH_TOP_TV';

interface FetchUpcomingMovieAction {
  type: typeof FETCH_UPCOMING_MOVIES;
}

interface FetchPopularMovieAction {
  type: typeof FETCH_POPULAR_MOVIES;
}

interface FetchTopMovieAction {
  type: typeof FETCH_TOP_MOVIES;
}

interface FetchLatestTvAction {
  type: typeof FETCH_LATEST_TV;
}

interface FetchPopularTvAction {
  type: typeof FETCH_POPULAR_TV;
}

interface FetchTopTvAction {
  type: typeof FETCH_TOP_TV;
}

export type FetchActionTypes =
  | FetchUpcomingMovieAction
  | FetchPopularMovieAction
  | FetchTopMovieAction
  | FetchLatestTvAction
  | FetchPopularTvAction
  | FetchTopTvAction;
