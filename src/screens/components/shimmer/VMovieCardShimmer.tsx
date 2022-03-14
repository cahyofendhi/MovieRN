import React from 'react';
import {StyleSheet, View} from 'react-native';
import {isTablet, width} from '../../../styles/dimension.style';
import {ShimmerPlaceHolder} from './ViewShimmer';

const imageWidth = width / (isTablet() ? 7: 4);

export const VMovieListShimmer: React.FC = () => {
  const renderItems: Element[] = [];
  const movies = [1, 2, 3, 4, 5, 6, 7];
  for (const dt of movies) {
    renderItems.push(<VMovieItemShimmer key={dt}/>);
  }
  return (
    <View style={styles.contentList}>{renderItems}</View>
  );
};

const VMovieItemShimmer: React.FC = () => {
  return (
    <View style={styles.contentItem}>
      <ShimmerPlaceHolder
        style={styles.imageItem}
      />
      <View style={styles.titleGroup}>
        <ShimmerPlaceHolder style={styles.titleItem} />
        <ShimmerPlaceHolder style={styles.titleItem}/>
      </View>
    </View>
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
  titleGroup: {
    paddingLeft: 16,
    flex: 1,
  },
  titleItem: {
    borderRadius: 10,
    width: 150,
    height: 15,
    marginBottom: 10,
  },
});
