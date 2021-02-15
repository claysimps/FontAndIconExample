import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Text} from './Text';
import {IconSizes, IconProps} from './Icon';

FontAwesomeIcon.loadFont();

type IconButtonProps = IconProps & {
  text: string;
  onPress: () => void;
};

export const IconButton = ({
  onPress,
  size,
  name,
  color,
  text,
}: IconButtonProps) => (
  <FontAwesomeIcon.Button
    onPress={onPress}
    name={name}
    size={IconSizes[size]}
    color={color}>
    <Text>{text}</Text>
  </FontAwesomeIcon.Button>
);
