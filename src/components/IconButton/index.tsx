import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';

interface IconButtonProps extends TouchableOpacityProps {
  iconName: keyof typeof Feather.glyphMap,
  iconSize?: number,
  iconColor: string
}

function IconButton({ iconName, iconSize = 40, iconColor }: IconButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}

export default IconButton;