/* eslint-disable require-jsdoc */
import Realm from 'realm';
import {CategoryMovie, GroupMovie, MovieData} from '../../model/movie.model';

const movieSchemeName = 'movies';
const genreSchemeName = 'Genres';

const MovieSchema = {
  name: movieSchemeName,
  properties: {
    key: 'string',
    id: 'int',
    adult: 'bool?',
    backdrop_path: 'string?',
    genre_ids: 'int[]',
    original_language: 'string',
    original_title: 'string?',
    overview: 'string',
    popularity: 'int',
    poster_path: 'string',
    release_date: 'string?',
    title: 'string?',
    video: 'bool?',
    vote_average: 'double',
    vote_count: 'int',
    first_air_date: 'string?',
    original_name: 'string?',
    budget: 'int?',
    homepage: 'string?',
    imdb_id: 'string?',
    revenue: 'int?',
    runtime: 'int?',
    status: 'string?',
    tagline: 'string?',
    name: 'string?',
    category: 'string?',
    group: 'string?',
  },
  primaryKey: 'key',
};

const GenreSchema = {
  name: genreSchemeName,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
  },
};


const realmDB = new Realm({
  path: 'moviern.db',
  schema: [MovieSchema, GenreSchema],
  schemaVersion: 2,
  migration: () => {},
});

function saveMovieDB(movies: MovieData[],
    category: CategoryMovie,
    group: GroupMovie) {
  try {
    realmDB.write(() => {
      movies.forEach((item) => {
        realmDB.create<MovieData>(movieSchemeName,
            {
              ...item,
              key: item.id+category+group,
              category: category,
              group: group,
            }, Realm.UpdateMode.Modified);
      });
    });
  } catch (e) {
    console.error('Save realm error ' + e);
  }
}

function getMoviesDB(category: CategoryMovie, group: GroupMovie) {
  try {
    const data = realmDB.objects<MovieData>(movieSchemeName);
    const results = data.filtered('category == "' + category +'" &&' + 'group == "' + group + '" DISTINCT(id)');
    return results;
  } catch (e) {
    console.error('Get realm error ' + e);
    return [];
  }
}

export {
  saveMovieDB,
  getMoviesDB,
};
