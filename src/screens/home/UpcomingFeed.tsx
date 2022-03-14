import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {getPosterPath, MovieData} from '../../model/movie.model';
import {AppImage} from '../components/AppImage';
import {UpcomingShimmer} from '../components/shimmer/UpcomingCardShimmer';
const {width} = Dimensions.get('window');

interface UpcomingProps {
  movies: MovieData[];
  isRequest: boolean,
  onPress: (movie: MovieData) => void;
}

export const UpcomingFeed: React.FC<UpcomingProps> = ({
  movies = [],
  isRequest = true,
  onPress,
}) => {
  return (
    <View>
      {
        isRequest ?
        <UpcomingShimmer/> :
        <FlatList
          contentContainerStyle={styles.contentList}
          data={movies}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onPress(item)}>
              <UpcomingItem movie={item} />
            </TouchableOpacity>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      }
    </View>
  );
};

interface UpcomingItemProps {
  movie: MovieData;
}

const UpcomingItem: React.FC<UpcomingItemProps> = ({movie}) => {
  const imageWidth = Math.round(width / 4);
  return (
    <View style={styles.containerItem}>
      <AppImage
        style={[{width: imageWidth}, styles.item]}
        url={getPosterPath(movie.backdrop_path)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentList: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  item: {
    height: 75,
    borderRadius: 10,
  },
});
