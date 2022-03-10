import {MovieData} from '../model/movie.model';

export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
  DetailMovie: {movie: MovieData};
};
