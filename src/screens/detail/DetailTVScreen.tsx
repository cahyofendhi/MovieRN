/* eslint-disable require-jsdoc */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Extrapolate} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {formatNumber} from '../../helper/format.helper';
import {getGenreTitle, getPosterPath, MovieData} from '../../model/movie.model';
import {RootState, updateCrewTV, updateSimiliarTV, updateTV} from '../../redux';
import {isTablet, StatusBarManager, width} from '../../styles/dimension.style';
import {AppImage} from '../components/AppImage';
import {FlexContainer} from '../components/container/FlexContainer';
import {IconBack} from '../components/icons';
import {Label} from '../components/label';
import NavBarBack from '../components/navbarBack';
import {RootStackParamList} from '../RootStackPrams';
import {CreditPeople} from './components/CreditPeople';
import {SimiliarMovie} from './components/SimiliarMovie';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;
const navBarHeight = 48 + StatusBarManager.HEIGHT;
const paddingTopNavBar = StatusBarManager.HEIGHT - 10;

type detailTVScreenProps = StackNavigationProp<RootStackParamList, 'DetailTV'>;

const DetailTVScreen: React.FC = () => {
  const navigation = useNavigation<detailTVScreenProps>();
  const route = useRoute<RouteProp<RootStackParamList, 'DetailTV'>>();
  const params = route.params;
  const dispatch = useDispatch();
  const {movie, crews, similiarMovie, isCrewRequest, isSimiliarRequest} = useSelector((state: RootState) => state.detailTV);
  const title = movie?.name != null ? movie.name : '-';

  useEffect(() => {
    dispatch(updateTV(params.movie));
    dispatch(updateCrewTV(params.movie.id));
    dispatch(updateSimiliarTV(params.movie.id));
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
    navigation.push('DetailTV', {movie: item});
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
        <View style={{flex: 1}}>
          <View style={styles.contentMiddle}>
            <View style={styles.middleContentGroup}>
              <Text style={styles.titleMiddleContent}>
                {
                 (movie.last_episode_to_air != null) ?
                  movie.last_episode_to_air.episode_number : '0'
                }
              </Text>
              <Text style={styles.descriptionMiddleContent}>Episode</Text>
            </View>
            <View style={styles.middleContentGroup}>
              <Text style={styles.titleMiddleContent}>{formatNumber(movie.popularity)}</Text>
              <Text style={styles.descriptionMiddleContent}>Popularity</Text>
            </View>
            <View style={styles.middleContentGroup}>
              <View style={{justifyContent: 'center'}}>
                <Label average={movie.vote_average}/>
              </View>
              <Text style={styles.descriptionMiddleContent}>Average</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={{paddingHorizontal: 16, paddingBottom: 16}}>
              <Text style={styles.title}>{title}</Text>
              <FlexContainer items={getGenreTitle(movie.genres)}/>
              <Text style={styles.titleDescription}>
                {movie.overview.length ? movie.overview : '-'}
              </Text>
            </View>
            <CreditPeople isRequest={isCrewRequest} crews={crews}/>
            <SimiliarMovie isRequest={isSimiliarRequest} movies={similiarMovie} onPress={onPress}/>
          </View>
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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 10,
    width: width,
    height: width - 30,
    position: 'absolute',
  },
  title: {
    marginVertical: 16,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  contentMiddle: {
    flex: 1,
    height: 100,
    marginLeft: isTablet() ? width / 2 : 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  middleContentGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 0.33,
  },
  titleMiddleContent: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  descriptionMiddleContent: {
    fontSize: 14,
    fontWeight: '400',
    color: '#5b5b5b',
    paddingTop: 8,
  },
  contentContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 20,
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
  titleDescription: {
    color: '#5b5b5b',
    fontWeight: '400',
    fontSize: 14,
  },
});

export default DetailTVScreen;
