import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');
import {isTablet} from '../../../styles/dimension.style';
import {ShimmerPlaceHolder} from './ViewShimmer';

const imageWidth = Math.round(width / (isTablet() ? 7 :4));

export const UpcomingShimmer: React.FC = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <FlatList
      contentContainerStyle={styles.contentList}
      data={data}
      renderItem={({item}) => (
        <UpcomingItemShimmer/>
      )}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const UpcomingItemShimmer: React.FC = () => {
  return (
    <View style={styles.containerItem}>
      <ShimmerPlaceHolder
        style={styles.item}
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
    width: imageWidth,
    height: 75,
    borderRadius: 10,
  },
});
