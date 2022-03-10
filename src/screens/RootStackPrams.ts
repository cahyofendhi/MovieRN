import {MovieData} from '../model/moviemodel';

export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
  DetailMovie: {movie: MovieData};
};
