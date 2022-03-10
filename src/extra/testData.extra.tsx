import {MovieData, MovieResponse} from '../model/moviemodel';

const movies: MovieData[] = [
  {
    adult: false,
    backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview:
      'Peter Parker menghadapi masalah besar. Hal ini terjadi setelah identitasnya',
    popularity: 5083.954,
    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    release_date: '2021-12-15',
    title: 'Spider-Man: No Way Home',
    video: false,
    vote_average: 8.3,
    vote_count: 12334,
  },
  {
    adult: false,
    backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview:
      'Peter Parker menghadapi masalah besar. Hal ini terjadi setelah identitasnya',
    popularity: 5083.954,
    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    release_date: '2021-12-15',
    title: 'Spider-Man: No Way Home',
    video: false,
    vote_average: 8.3,
    vote_count: 12334,
  },
  {
    adult: false,
    backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview:
      'Peter Parker menghadapi masalah besar. Hal ini terjadi setelah identitasnya',
    popularity: 5083.954,
    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    release_date: '2021-12-15',
    title: 'Spider-Man: No Way Home',
    video: false,
    vote_average: 8.3,
    vote_count: 12334,
  },
];

const movieResponse: MovieResponse = {
  page: 1,
  results: movies,
  total_pages: 2,
  total_results: 10,
};

export const testData = {
  movies,
  movieResponse,
};
