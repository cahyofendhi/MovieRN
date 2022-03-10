import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSearch} from '../components/icons';

interface HeaderHomeProps {
  title: string;
  onSearch: () => void;
}

export const HeaderHome: React.FC<HeaderHomeProps> = ({
  title = 'Movie',
  onSearch,
}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <IconSearch onPress={onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 58,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
