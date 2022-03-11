import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface LabelProps {
  average: number;
}

export const Label: React.FC<LabelProps> = ({average}) => {
  const color = average > 8.3 ? '#7baf04' : average > 7 ? '#f1c232' : '#f44336';
  return (
    <View style={[styles.label, {backgroundColor: color}]}>
      <Text style={styles.titleLabel}>{average+''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    padding: 5,
    alignSelf: 'baseline',
    borderRadius: 5,
  },
  titleLabel: {
    fontSize: 12,
    color: 'white',
  },
});
