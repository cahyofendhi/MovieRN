import {GroupMovie, MovieData} from '../../model/movie.model';

export type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  DetailMovie: {movie: MovieData};
  DetailTV: {movie: MovieData};
  Search: {group: GroupMovie};
};
