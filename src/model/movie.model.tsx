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
}

export function getPosterPath(path: string): string {
  return baseImage + path;
}

export interface MovieResponse {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
}
