import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {getPosterPath, MovieData} from '../../model/movie.model';
const {width} = Dimensions.get('window');

interface UpcomingProps {
  movies: MovieData[];
  onPress: (movie: MovieData) => void;
}

export const UpcomingFeed: React.FC<UpcomingProps> = ({
  movies = [],
  onPress,
}) => {
  return (
    <View>
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
      <Image
        resizeMode={'cover'}
        style={[{width: imageWidth}, styles.item]}
        source={{
          uri: getPosterPath(movie.backdrop_path),
        }}
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
