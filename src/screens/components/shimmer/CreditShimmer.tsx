import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {isTablet, width} from '../../../styles/dimension.style';
import {ShimmerPlaceHolder} from './ViewShimmer';

export const CreditPeopleShimmer: React.FC = () => {
  const crews = [1, 2, 3, 4, 5, 6, 7];
  return (
    <FlatList
      contentContainerStyle={styles.contentList}
      data={crews}
      renderItem={({item}) => (
        <PeopleItemShimmer />
      )}
      horizontal
      initialScrollIndex={0}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const widthItem = width / (isTablet() ? 9 : 5);

const PeopleItemShimmer: React.FC = () => {
  return (
    <View style={styles.contentItem}>
      <ShimmerPlaceHolder
        style={styles.imageItem}
      />
      <ShimmerPlaceHolder
        style={styles.titleItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  contentList: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentItem: {
    marginRight: 5,
    width: widthItem,
    height: widthItem,
  },
  imageItem: {
    width: widthItem,
    height: widthItem,
    aspectRatio: 1,
    borderRadius: widthItem / 2,
  },
  titleItem: {
    width: 50,
    height: 15,
    alignSelf: 'center',
  },
});
