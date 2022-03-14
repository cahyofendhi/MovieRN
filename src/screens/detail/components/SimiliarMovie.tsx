/* eslint-disable react/jsx-key */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getPosterPath, MovieData} from '../../../model/movie.model';
import {width} from '../../../styles/dimension.style';
import {AppImage} from '../../components/AppImage';
import {SimiliarShimmer} from '../../components/shimmer/SimiliarShimmer';

interface SimiliarMovieProps {
  movies: MovieData[];
  isRequest: boolean,
  onPress: (movie: MovieData) => void;
}

export const SimiliarMovie: React.FC<SimiliarMovieProps> = ({movies, onPress, isRequest = false}) => {
  const rows = [...Array( Math.ceil(movies.length / 4) )];
  const productRows = rows.map( (row, idx) => movies.slice(idx * 4, idx * 4 + 4) );
  const content = productRows.map((row, idx) => (
    <View key={idx} style={{flexDirection: 'row'}}>
      {
        row.map( (dt) =>
          <TouchableOpacity key={dt.id} onPress={() => onPress(dt)}>
            <SimiliarMovieItem movie={dt}/>
          </TouchableOpacity>,
        )
      }
    </View>
  ));
  return (
    <View>
      <Text style={styles.title}>Similiar Movie</Text>
      {
        isRequest ?
        <SimiliarShimmer /> :
        <View style={styles.contentList}>
          {content}
        </View>
      }
    </View>
  );
};

interface SimiliarMovieItemProps {
  movie: MovieData;
}

const SimiliarMovieItem: React.FC<SimiliarMovieItemProps> = ({movie}) => {
  return (
    <View style={styles.contentItem}>
      <AppImage
        style={styles.imageItem}
        url={getPosterPath(movie.backdrop_path)}
      />
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.titleItem}>
        {movie.title != null ? movie.title : movie.name !=null ? movie.name : '-'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentList: {
    alignSelf: 'center',
  },
  contentItem: {
    flexDirection: 'column',
    width: (width / 4) - 4 - 10,
    margin: 4,
  },
  imageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  titleItem: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    paddingTop: 8,
    paddingBottom: 8,
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
