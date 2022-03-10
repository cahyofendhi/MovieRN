import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface LabelProps {
  title: string;
}

export const Label: React.FC<LabelProps> = ({title}) => {
  return (
    <View style={styles.label}>
      <Text style={styles.titleLabel}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    backgroundColor: '#7baf04',
    padding: 5,
    alignSelf: 'baseline',
    borderRadius: 5,
  },
  titleLabel: {
    fontSize: 12,
    color: 'white',
  },
});
