/* eslint-disable require-jsdoc */
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../root/RootStackPrams';
import {MainBottomTabParamList} from '../root/MainBottomTabParams';
import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {HMovieList} from '../components/card/HMovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderHome} from '../home/HeaderHome';
import {
  RootState,
  updateLatestTv,
  updatePopularTv,
  updateTopTv,
} from '../../redux';
import {MovieData} from '../../model/movie.model';

type TvScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'TV'>
>;

const TVScreen: React.FC = () => {
  const navigation = useNavigation<TvScreenProp>();

  const dispatch = useDispatch();
  const {latestMovie, popularMovie, topMovie,
    isLatestRequest, isPopularRequest, isTopRequest,
  } = useSelector(
      (state: RootState) => state.tvMovie,
  );

  function refreshMovies() {
    dispatch(updateLatestTv());
    dispatch(updatePopularTv());
    dispatch(updateTopTv());
  }

  useEffect(() => {
    refreshMovies();
  }, []);

  function onPress(item: MovieData) {
    navigation.navigate('DetailTV', {movie: item});
  }

  function onSearch() {
    navigation.push('Search', {group: 'tv'});
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <HeaderHome title="TV" onSearch={onSearch} />
        <HMovieList isRequest={isLatestRequest} title={'On Air TV'} movies={latestMovie} onPress={onPress} />
        <HMovieList isRequest={isTopRequest} title={'Top TV'} movies={topMovie} onPress={onPress} />
        <HMovieList isRequest={isPopularRequest} title={'Popular'} movies={popularMovie} onPress={onPress}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#F8F8F8',
    paddingBottom: 50,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});

export default TVScreen;
