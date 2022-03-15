import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';


interface AppButtonProps {
    title: String;
    style?: StyleProp<TextStyle>,
    enable?: boolean,
    onPress?: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({enable = true, style, title, onPress}) => {
  const buttonStyle =
    [
      styles.buttonPanel,
      style,
      {
        backgroundColor: enable ? '#2986cc' : '#bcbcbc',
      },
    ];

  return (
    <View style={styles.container}>
      <View style={[{width: '100%'}, style]}>
        {
        enable ?
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>:
        <View style={buttonStyle}>
          <Text style={styles.text}>{title}</Text>
        </View>
        }
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  buttonPanel: {
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#2986cc',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default AppButton;
