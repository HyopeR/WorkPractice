import React from 'react';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomIcon = ({name, size = 20, color}) => {
  const {colors} = useTheme();
  const iconColor = color !== undefined ? color : colors.text;

  return <Icon name={name} size={size} color={iconColor} />;
};

export {CustomIcon};
