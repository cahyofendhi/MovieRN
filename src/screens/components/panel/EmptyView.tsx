import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '../Button';

interface EmptyViewProps {
    onPress: () => void;
}

const EmptyView: React.FC<EmptyViewProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Data</Text>
      <AppButton style={styles.button} title={'Refresh'} onPress={onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 25,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
  },
});

export default EmptyView;
