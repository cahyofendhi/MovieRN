import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBack} from './icons';

interface NavBarProps {
    title: string;
    onPress: () => void,
}

const NavBarBack: React.FC<NavBarProps> = ({title, onPress}) => {
  return (
    <View
      style={styles.container}>
      <View style={{paddingLeft: 20}}>
        <IconBack onPress={onPress}/>
      </View>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    paddingLeft: 16,
    fontWeight: '700',
    color: 'black',
  },
});


export default NavBarBack;
