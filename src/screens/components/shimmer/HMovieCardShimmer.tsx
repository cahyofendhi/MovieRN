import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {isTablet, width} from '../../../styles/dimension.style';
import {ShimmerPlaceHolder} from './ViewShimmer';

const contentWidth = width / (isTablet() ? 6 : 3);

export const HMovieListShimmer: React.FC = () => {
  const movies = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.contentList}
        data={movies}
        renderItem={({item}) => (
          <HMovieItemShimmer />
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

const HMovieItemShimmer: React.FC = () => {
  return (
    <View style={styles.contentItem}>
      <ShimmerPlaceHolder
        style={styles.imageItem}/>
      <ShimmerPlaceHolder style={styles.title}/>
    </View>
  );
};

const styles = StyleSheet.create({
  contentList: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentItem: {
    flex: 1,
    marginRight: 10,
    width: contentWidth,
  },
  title: {
    borderRadius: 10,
    width: contentWidth - 10,
    marginTop: 8,
    alignSelf: 'center',
  },
  imageItem: {
    width: width / 3,
    height: (contentWidth - 10) * 4 / 3,
    borderRadius: 10,
    backgroundColor: '#eeeeee',
  },
});
