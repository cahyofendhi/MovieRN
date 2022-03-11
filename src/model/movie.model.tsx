/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
import {baseImage} from '../helper/app.helper';
export type CategoryMovie =
  | 'upcoming'
  | 'now_playing'
  | 'popular'
  | 'top_rated'
  | 'on_the_air';
export type GroupMovie = 'movie' | 'tv';
export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  original_name?: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
}

export function getPosterPath(path: string): string {
  return baseImage + path;
}

export function getGenreTitle(genres: Genre[]): string[] {
  if (genres != null && genres.length > 0) {
    const titles: string[] = genres.map((val) => {
      return val.name;
    });
    return titles;
  } else {
    return [];
  }
}

export interface MovieResponse {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}
