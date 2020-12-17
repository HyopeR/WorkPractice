import React from 'react';
import {Spinner} from 'native-base';
import {useTheme} from '@react-navigation/native';

const CustomSpinner = ({color}) => {
  const {colors} = useTheme();

  return <Spinner color={color !== undefined ? color : colors.primary} />;
};

export {CustomSpinner};
