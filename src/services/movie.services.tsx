import {CategoryMovie, GroupMovie, MovieResponse} from '../model/movie.model';
import {client, getUrl} from './api.service';

async function getMovieList(
  group: GroupMovie,
  category: CategoryMovie,
): Promise<MovieResponse> {
  const url = getUrl(`${group}/${category}`);
  const response = await client.get<MovieResponse>(url);
  return response.data;
}

export const movieService = {
  getMovieList,
};
