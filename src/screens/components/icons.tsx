import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {width} from '../../styles/dimension.style';


const iconSize = {
  xxs: width / 28,
  xs: width / 24,
  sm: width / 20,
  md: width / 16,
  lg: width / 12,
  xl: width / 8,
};

interface IconProps {
  color?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onPress?(): void;
  disabled?: boolean;
  badgeCount?: number;
}

export const IconSearch: React.FC<IconProps> = (props) => {
  return <IconBase name="md-search" {...props} />;
};

export const IconBack: React.FC<IconProps> = (props) => {
  return <IconBase name="arrow-back-outline" {...props} />;
};

export const IconLike: React.FC<IconProps> = (props) => {
  return <IconBase name="hearto" {...props} />;
};

export const IconLiked: React.FC<IconProps> = (props) => {
  return <IconBase name="heart" color="#bd081c" {...props} />;
};

export const IconClose: React.FC<IconProps> = (props) => {
  return <IconBase name="close" {...props} />;
};

interface IconBaseProps {
  name: string;
}

const IconBase: React.FC<IconBaseProps & IconProps> = ({
  name = '',
  color = '#2b2b2b',
  size = 'md',
  onPress,
  disabled = false,
}) => {
  const icon = <Ionicons size={iconSize[size]} name={name} color={color} />;
  return onPress ? (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={styles.iconContainer}>{icon}</View>
    </TouchableOpacity>
  ) : (
    icon
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
});
