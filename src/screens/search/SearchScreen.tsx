/* eslint-disable require-jsdoc */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, updateSearchMovie} from '../../redux';
import {VMovieItem} from '../components/card/VMovieCard';
import {IconBack} from '../components/icons';
import EmptyView from '../components/panel/EmptyView';
import {RootStackParamList} from '../RootStackPrams';

type searchScreenProps = StackNavigationProp<RootStackParamList, 'Search'>;

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<searchScreenProps>();
  const route = useRoute<RouteProp<RootStackParamList, 'Search'>>();
  const params = route.params;
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const {isRefresh, isLoad, movies, page, nextPage, totalPage} = useSelector(
      (state: RootState) => state.search,
  );

  useEffect(() => {
    searchMovie('a');
  }, []);

  function searchMovie(search?: string, _page: number = 1) {
    let text = query;
    if (search != null) {
      text = search;
      setQuery(search);
    }
    dispatch(updateSearchMovie(text, _page, params.group));
  }


  return (
    <View style={styles.container}>
      <View style={styles.searchPanel}>
        <View style={{flex: 1, alignItems: 'center', padding: 10}}>
          <IconBack onPress={() => navigation.goBack()}/>
        </View>
        <TextInput
          placeholder='Search...'
          placeholderTextColor= '#bcbcbc'
          onChangeText={searchMovie}
          style={styles.searchBar}
        />
      </View>
      {
        (isRefresh && movies.length == 0) ?
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'}/>
        </View> :
        <FlatList
          contentContainerStyle={styles.contentList}
          data={movies}
          renderItem={({item}) => (
            <VMovieItem movie={item} onPress={(dt) => {
              navigation.push(
              params.group == 'movie' ?
             'DetailMovie' :
             'DetailTV',
              {movie: dt},
              );
            }} />
          )}
          keyExtractor={(_, index) => index.toString()}
          refreshControl = {
            <RefreshControl refreshing={isRefresh} onRefresh={() => searchMovie(query, 1)} />
          }
          pagingEnabled={true}
          onEndReached={() => {
            if (page < totalPage) {
              searchMovie(query, nextPage);
            }
          }}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={() => <EmptyView onPress={() => searchMovie(query, 1)}/>}
          ListHeaderComponent={() => <LoadingIndicator isLoading={isRefresh} key={'0refr'} /> }
          ListFooterComponent={() => <LoadingIndicator isLoading={isLoad} key={'1load'}/> }
        />
      }

    </View>
  );
};

interface LoadingIndicatorProps {
  isLoading: boolean
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({isLoading}) => {
  return (
    <View>
      {
        isLoading ?
        <ActivityIndicator /> :
        <View/>
      }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchPanel: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  searchBar: {
    fontSize: 12,
    margin: 10,
    width: '85%',
    height: 40,
    color: '#444444',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  contentList: {
    flexGrow: 1,
    padding: 20,
  },

});

export default SearchScreen;
