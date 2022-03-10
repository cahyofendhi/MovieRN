import {combineReducers} from 'redux';
import {homeMovieReducer} from './movie.reducer';
import {tvMovieReducer} from './tv.reducer';

export const rootReducer = combineReducers({
  homeMovie: homeMovieReducer,
  tvMovie: tvMovieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
