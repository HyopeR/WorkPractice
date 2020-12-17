import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Text} from 'react-native';

const CustomText = ({style, children, onPress, error}) => {
  const {colors} = useTheme();
  const textStyle = [
    style,
    {color: error !== undefined ? colors.notification : colors.text},
  ];

  return (
    <Text onPress={onPress} style={textStyle}>
      {children}
    </Text>
  );
};

export {CustomText};
