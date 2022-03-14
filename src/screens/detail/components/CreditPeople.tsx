import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Crew} from '../../../model/crews.model';
import {getPosterPath} from '../../../model/movie.model';
import {width} from '../../../styles/dimension.style';
import {AppImage} from '../../components/AppImage';
import {CreditPeopleShimmer} from '../../components/shimmer/CreditShimmer';

interface CreditPeopleProps {
  crews: Crew[];
  isRequest: boolean
}

export const CreditPeople: React.FC<CreditPeopleProps> = ({crews, isRequest = false}) => {
  return (
    <View>
      <Text style={styles.title}>Credit People</Text>
      {
        isRequest ?
        CreditPeopleShimmer :
        <FlatList
          contentContainerStyle={styles.contentList}
          data={crews}
          renderItem={({item}) => (
            <PeopleItem crew={item}/>
          )}
          horizontal
          initialScrollIndex={0}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      }

    </View>
  );
};

const widthItem = width / 5;

interface PeopleItemProps {
  crew: Crew;
}

const PeopleItem: React.FC<PeopleItemProps> = ({crew}) => {
  return (
    <View style={styles.contentItem}>
      <AppImage
        style={styles.imageItem}
        url={getPosterPath(crew.profile_path)}
      />
      <Text numberOfLines={2}
        ellipsizeMode="tail"
        style={styles.titleItem}>
        {crew.name}
      </Text>
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
  },
  imageItem: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: widthItem / 2,
  },
  titleItem: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    paddingTop: 8,
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
