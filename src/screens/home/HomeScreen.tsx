import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';
import {MainBottomTabParamList} from '../main/MainBottomTabParams';
import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {UpcomingFeed} from './UpcomingFeed';
import {HeaderHome} from './HeaderHome';
import {HMovieList} from '../components/card/HMovieCard';
import {VMovieList} from '../components/card/VMovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  RootState,
  updatePopularMovie,
  updateTopMovie,
  updateUpcomingMovie,
} from '../../redux';
import {MovieData} from '../../model/movie.model';

type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Home'>
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const dispatch = useDispatch();
  const {upcomingMovie, popularMovie, topMovie} = useSelector(
    (state: RootState) => state.homeMovie,
  );

  function refreshMovies() {
    dispatch(updateUpcomingMovie());
    dispatch(updatePopularMovie());
    dispatch(updateTopMovie());
  }

  useEffect(() => {
    refreshMovies();
  }, []);

  function onPress(item: MovieData) {
    navigation.navigate('DetailMovie', {movie: item});
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <HeaderHome title="Movie" onSearch={() => {}} />
        <UpcomingFeed onPress={onPress} movies={upcomingMovie} />
        <HMovieList title={'Popular'} movies={popularMovie} onPress={onPress} />
        <VMovieList title={'Top Movies'} movies={topMovie} onPress={onPress} />
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

export default HomeScreen;
