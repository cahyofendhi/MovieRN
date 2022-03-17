import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {genreList} from '../../../helper/app.helper';
import {getPosterPath, MovieData} from '../../../model/movie.model';
import {isTablet, width} from '../../../styles/dimension.style';
import {AppImage} from '../AppImage';
import {Label} from '../label';
import {VMovieListShimmer} from '../shimmer/VMovieCardShimmer';

const imageWidth = width / (isTablet() ? 7: 4);

interface VMovieProps {
  title: string;
  movies: MovieData[];
  isRequest: boolean;
  onPress: (movie: MovieData) => void;
}

export const VMovieList: React.FC<VMovieProps> = ({
  title = 'title',
  movies = [],
  isRequest = true,
  onPress,
}) => {
  const renderItems: Element[] = [];
  for (const dt of movies) {
    renderItems.push(<VMovieItem key={dt.id} movie={dt} onPress={onPress} />);
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {
        isRequest ?
        <VMovieListShimmer /> :
        <View style={styles.contentList}>{renderItems}</View>
      }
    </View>
  );
};

interface VMovieItemProps {
  movie: MovieData;
  onPress: (movie: MovieData) => void;
}

export const VMovieItem: React.FC<VMovieItemProps> = ({movie, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(movie)} style={styles.contentItem}>
      <AppImage
        style={styles.imageItem}
        url={getPosterPath(movie.backdrop_path)}
      />
      <View style={styles.titleGroup}>
        <Text style={styles.titleItem} numberOfLines={2} ellipsizeMode="tail">
          {movie.title}
        </Text>
        <Label average={movie.vote_average} />
        <Text style={styles.genre} numberOfLines={2} ellipsizeMode="tail">
          {genreList(movie.genre_ids)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentList: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  contentItem: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  imageItem: {
    width: imageWidth,
    aspectRatio: 3 / 4,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleGroup: {
    paddingLeft: 16,
    flex: 1,
  },
  titleItem: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    paddingBottom: 8,
  },
  genre: {
    paddingTop: 16,
    fontSize: 12,
    fontWeight: '400',
    color: '#5b5b5b',
  },
});
