import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';

interface IconButtonProps extends TouchableOpacityProps {
  iconName: keyof typeof Feather.glyphMap,
  iconSize?: number,
  iconColor: string
}

export const defaultValues = {
  iconSize: 40
};

function IconButton({ 
  iconName, 
  iconSize = defaultValues.iconSize, 
  iconColor,
  onPress
}: IconButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}

export default IconButton;