import React from 'react';
import {Image, ImageStyle, StyleProp, View} from 'react-native';

interface AppImageProps {
    style: StyleProp<ImageStyle> | undefined;
    url: string;
}

export const AppImage: React.FC<AppImageProps> = ({url, style}) => {
  return (
    <View style={style}>
      <View style={[style, {backgroundColor: '#eeeeee', position: 'absolute'}]} />
      <Image
        style={[style, {position: 'absolute'}]}
        resizeMode={'cover'}
        source={{uri: url}}
      />
    </View>
  );
};
