import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface FlexContainerProps {
    items: string[];
}

export const FlexContainer: React.FC<FlexContainerProps> = ({items}) => {
  const labels: Element[] = [];
  items.forEach((itm, index) => {
    labels.push(<View key={index} style={styles.textContainer}>
      <Text style={styles.text}>{itm}</Text>
    </View>);
  });
  return (
    <View style={styles.container}>
      {labels}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 16,
  },
  textContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#5b5b5b',
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#5b5b5b',
  },
});
