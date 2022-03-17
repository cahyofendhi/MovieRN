/* eslint-disable require-jsdoc */
import {CrewsResponse} from '../model/crews.model';
import {CategoryMovie, GroupMovie, MovieData, MovieResponse} from '../model/movie.model';
import {client, getUrl} from './api.service';

async function getMovieList(
    group: GroupMovie,
    category: CategoryMovie,
): Promise<MovieResponse> {
  const url = getUrl(`${group}/${category}`);
  const response = await client.get<MovieResponse>(url);
  return response.data;
}

async function getDetailMovie(
    id: number,
    group: GroupMovie,
): Promise<MovieData> {
  const url = getUrl(`${group}/${id}`);
  const response = await client.get<MovieData>(url);
  return response.data;
}

async function getCrewsMovie(
    id: number,
    group: GroupMovie,
): Promise<CrewsResponse> {
  const url = getUrl(`${group}/${id}/credits`);
  const response = await client.get<CrewsResponse>(url);
  return response.data;
}

async function getSimiliarMovie(
    id: number,
    group: GroupMovie,
): Promise<MovieResponse> {
  const url = getUrl(`${group}/${id}/similar`);
  const response = await client.get<MovieResponse>(url);
  return response.data;
}

async function searchMovie(
    group: GroupMovie,
    query: string,
    page: number): Promise<MovieResponse> {
  const url = getUrl(`search/${group}`, `page=${page}&query=${query}`);
  const response = await client.get<MovieResponse>(url);
  return response.data;
}

export const movieService = {
  getMovieList,
  getDetailMovie,
  getCrewsMovie,
  getSimiliarMovie,
  searchMovie,
};
