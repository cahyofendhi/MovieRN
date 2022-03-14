/* eslint-disable react/jsx-key */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {isTablet, width} from '../../../styles/dimension.style';
import {ShimmerPlaceHolder} from './ViewShimmer';


const column = isTablet() ? 8 : 4;

export const SimiliarShimmer: React.FC = () => {
  const movies = [1, 2, 3, 4, 5, 6, 7];
  const rows = [...Array( Math.ceil(movies.length / column) )];
  const productRows = rows.map( (row, idx) => movies.slice(idx * column, idx * column + column) );
  const content = productRows.map((row, idx) => (
    <View key={idx} style={{flexDirection: 'row'}}>
      {
        row.map( (dt) =>
          <View key={dt}>
            <SimiliarMovieItemShimmer/>
          </View>,
        )
      }
    </View>
  ));
  return (
    <View>
      <View style={styles.contentList}>
        {content}
      </View>
    </View>
  );
};

const SimiliarMovieItemShimmer: React.FC = () => {
  return (
    <View style={styles.contentItem}>
      <ShimmerPlaceHolder
        style={styles.imageItem}
      />
      <ShimmerPlaceHolder style={styles.titleItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  contentList: {
    alignSelf: 'center',
  },
  contentItem: {
    flexDirection: 'column',
    width: (width / column) - 4 - 10,
    margin: 4,
  },
  imageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width / column) - 4 - 10,
    height: (width / column) - 4 - 10,
    borderRadius: 10,
  },
  titleItem: {
    width: 75,
    height: 10,
    borderRadius: 8,
    marginTop: 8,
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
