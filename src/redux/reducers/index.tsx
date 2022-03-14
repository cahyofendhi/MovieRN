import {combineReducers} from 'redux';
import {detailMovieReducer} from './detail.movie.reducer';
import {detailTVReducer} from './detail.tv.reducer';
import {homeMovieReducer} from './movie.reducer';
import {tvMovieReducer} from './tv.reducer';

export const rootReducer = combineReducers({
  homeMovie: homeMovieReducer,
  tvMovie: tvMovieReducer,
  detailMovie: detailMovieReducer,
  detailTV: detailTVReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
