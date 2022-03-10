import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {dateFormat} from '../../../helper/format.helper';
import {getPosterPath, MovieData} from '../../../model/movie.model';
const {width} = Dimensions.get('window');

interface HMovieProps {
  title: string;
  movies: MovieData[];
  onPress: (movie: MovieData) => void;
}

export const HMovieList: React.FC<HMovieProps> = ({
  title = 'Title',
  movies = [],
  onPress,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        contentContainerStyle={styles.contentList}
        data={movies}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => onPress(item)}>
            <HMovieItem movie={item} />
          </TouchableOpacity>
        )}
        horizontal
        initialScrollIndex={0}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

interface HMovieItemProps {
  movie: MovieData;
}

const HMovieItem: React.FC<HMovieItemProps> = ({movie}) => {
  return (
    <View style={styles.contentItem}>
      <Image
        resizeMode={'cover'}
        style={styles.imageItem}
        source={{uri: getPosterPath(movie.backdrop_path)}}
      />
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.titleItem}>
        {movie.title != null
          ? movie.title
          : movie.original_name != null
          ? movie.original_name
          : '-'}
      </Text>
      <Text style={styles.titleDescription}>
        {dateFormat(
          movie.release_date != null
            ? movie.release_date
            : movie.first_air_date != null
            ? movie.first_air_date
            : '-',
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentList: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentItem: {
    paddingRight: 10,
    width: width / 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  imageItem: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 10,
  },
  titleItem: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    paddingTop: 16,
  },
  titleDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#5b5b5b',
    paddingTop: 10,
  },
});
