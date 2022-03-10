import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../RootStackPrams';

type detailMovieScreenProps = StackNavigationProp<
  RootStackParamList,
  'DetailMovie'
>;

const DetailMovieScreen: React.FC = () => {
  const navigation = useNavigation<detailMovieScreenProps>();
  const route = useRoute<RouteProp<RootStackParamList, 'DetailMovie'>>();
  const title = route.params.movie.title;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{'Detail Movie of = ' + title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default DetailMovieScreen;
