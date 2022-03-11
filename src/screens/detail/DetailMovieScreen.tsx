/* eslint-disable require-jsdoc */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Extrapolate} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {getGenreTitle, getPosterPath, MovieData} from '../../model/movie.model';
import {RootState, updateCrewMovie, updateMovie, updateSimiliatMovie} from '../../redux';
import {StatusBarManager, width} from '../../styles/dimension.style';
import {AppImage} from '../components/AppImage';
import {FlexContainer} from '../components/container/FlexContainer';
import {IconBack} from '../components/icons';
import {Label} from '../components/label';
import NavBarBack from '../components/navbarBack';
import {RootStackParamList} from '../RootStackPrams';
import {CreditPeople} from './CreditPeople';
import {InformationMovie} from './InformationMovie';
import {SimiliarMovie} from './SimiliarMovie';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;
const navBarHeight = 48 + StatusBarManager.HEIGHT;
const paddingTopNavBar = StatusBarManager.HEIGHT - 10;

type detailMovieScreenProps = StackNavigationProp<RootStackParamList, 'DetailMovie'>;

const DetailMovieScreen: React.FC = () => {
  const navigation = useNavigation<detailMovieScreenProps>();
  const route = useRoute<RouteProp<RootStackParamList, 'DetailMovie'>>();
  const params = route.params;
  const dispatch = useDispatch();
  const {movie, crews, similiarMovie} = useSelector((state: RootState) => state.detailMovie);
  const title = movie?.original_title != null ? movie.original_title : '-';

  useEffect(() => {
    dispatch(updateMovie(params.movie));
    dispatch(updateCrewMovie(params.movie.id));
    dispatch(updateSimiliatMovie(params.movie.id));
  }, []);

  const [scrollY] = useState(new Animated.Value(0));
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  const headerNavBarOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const expandNavBarOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  function onPress(item: MovieData) {
    navigation.push('DetailMovie', {movie: item});
  }

  return (
    (movie != null) ?
    <View style={styles.container}>
      <AppImage
        url={getPosterPath(movie.backdrop_path)}
        style={styles.headerImage}
      />
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <Animated.View style={[styles.navbarExpand,
          {opacity: expandNavBarOpacity,
            flexDirection: 'row',
            alignItems: 'center',
          }]}>
          <View style={{paddingLeft: 20}}>
            <IconBack color='white' onPress={() => navigation.goBack()}/>
          </View>
        </Animated.View>
        <Animated.View style={[styles.navbarCollapse, {opacity: headerNavBarOpacity}]}>
          <NavBarBack title={title} onPress={() => navigation.goBack()}/>
        </Animated.View>
      </Animated.View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
            [{nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
            }],
            {useNativeDriver: false})
        }
        scrollEventThrottle={16}>
        <View style={styles.contentContainer}>
          <View style={{paddingLeft: 16, paddingRight: 16, paddingBottom: 16}}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <View style={{alignSelf: 'center'}}>
                <Label average={movie.vote_average}/>
              </View>
            </View>
            <FlexContainer items={getGenreTitle(movie.genres)}/>
            <Text style={styles.titleDescription}>
              {movie.overview.length ? movie.overview : '-'}
            </Text>
          </View>
          <CreditPeople crews={crews}/>
          <InformationMovie movie={movie}/>
          <SimiliarMovie movies={similiarMovie} onPress={onPress}/>
        </View>
      </ScrollView>
    </View> :
    <View style={styles.container}>
      <Text>Movie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingTop: HEADER_EXPANDED_HEIGHT,
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: width,
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  headerImage: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: width,
    height: width,
    position: 'absolute',
  },
  title: {
    marginVertical: 16,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 100,
  },
  navbarCollapse: {
    backgroundColor: '#99999950',
    height: navBarHeight,
    width: '100%',
    position: 'absolute',
    paddingTop: paddingTopNavBar,
    top: 0,
    left: 0,
  },
  navbarExpand: {
    height: navBarHeight,
    width: '100%',
    position: 'absolute',
    paddingTop: paddingTopNavBar,
    top: 0,
    left: 0,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleDescription: {
    color: '#5b5b5b',
    fontWeight: '400',
    fontSize: 14,
  },
});

export default DetailMovieScreen;
