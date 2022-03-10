import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';
import {MainBottomTabParamList} from '../main/MainBottomTabParams';
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

type TvScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'TV'>
>;

const TVScreen: React.FC = () => {
  const navigation = useNavigation<TvScreenProp>();

  const dispatch = useDispatch();
  const {latestMovie, popularMovie, topMovie} = useSelector(
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <HeaderHome title="TV" onSearch={() => {}} />
        <HMovieList title={'On Air TV'} movies={latestMovie} />
        <HMovieList title={'Top TV'} movies={topMovie} />
        <HMovieList title={'Popular'} movies={popularMovie} />
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
