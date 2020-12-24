import React from 'react';
import {Header, Body, Title} from 'native-base';
import {useTheme} from '@react-navigation/native';
import {View} from 'react-native';

const AppBar = ({title, leftChildren, rightChildren}) => {
  const {colors} = useTheme();

  return (
    <Header
      style={{backgroundColor: colors.primary}}
      androidStatusBarColor={colors.primary}
      iosBarStyle={'light-content'}>
      {leftChildren != null ? <View>{leftChildren}</View> : null}
      <Body>
        <View style={{marginHorizontal: 15}}>
          <Title>{title}</Title>
        </View>
      </Body>
      {rightChildren != null ? <View>{rightChildren}</View> : null}
    </Header>
  );
};

export {AppBar};
