import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {currencyFormat, dateFormat} from '../../helper/format.helper';
import {MovieData} from '../../model/movie.model';

interface InformationMovieProps {
  movie: MovieData;
}

export const InformationMovie: React.FC<InformationMovieProps> = ({movie}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information</Text>
      <InformationMovieItem title='Status' value={movie.status} />
      <InformationMovieItem title='RunTime' value={movie.runtime+' '} />
      <InformationMovieItem title='Premiere' value={dateFormat(movie.release_date!!)} />
      <InformationMovieItem title='Budget' value={currencyFormat(movie.budget)+' '} />
      <InformationMovieItem title='Revenue' value={currencyFormat(movie.revenue)+''} />
    </View>
  );
};

interface InformationMovieItemProps {
    title: string;
    value: string;
}

const InformationMovieItem: React.FC<InformationMovieItemProps> = ({title, value}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <Text style={styles.titleItem}>{title}</Text>
      <Text style={styles.description}>: {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    paddingBottom: 8,
  },
  titleItem: {
    fontSize: 14,
    fontWeight: '700',
    color: '#444444',
    flex: 0.3,
  },
  description: {
    flex: 0.7,
    fontSize: 14,
    fontWeight: '500',
    color: '#5b5b5b',
    paddingLeft: 20,
  },
});
