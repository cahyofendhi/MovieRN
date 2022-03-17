import {combineReducers} from 'redux';
import {detailMovieReducer} from './detail.movie.reducer';
import {detailTVReducer} from './detail.tv.reducer';
import {mainReducer} from './main.reducer';
import {homeMovieReducer} from './movie.reducer';
import {searchReducer} from './search.reducer';
import {tvMovieReducer} from './tv.reducer';

export const rootReducer = combineReducers({
  main: mainReducer,
  homeMovie: homeMovieReducer,
  tvMovie: tvMovieReducer,
  detailMovie: detailMovieReducer,
  detailTV: detailTVReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
