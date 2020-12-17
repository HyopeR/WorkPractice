import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomSpinner} from './CustomSpinner';

const CustomButton = ({
  spinner = false,
  title,
  onPress,
  backgroundColor,
  flex,
}) => {
  const {colors} = useTheme();

  let {buttonWrapper} = styles;
  buttonWrapper = {
    ...buttonWrapper,
    backgroundColor: backgroundColor || colors.primary,
  };

  return (
    <View style={[styles.buttonBack, {flex: flex !== undefined ? 1 : 0}]}>
      <View style={buttonWrapper}>
        <TouchableHighlight
          style={styles.buttonElements}
          underlayColor={colors.hoverShadow}
          onPress={onPress}>
          <Text style={styles.buttonText}>
            {spinner ? <CustomSpinner color={'#FFF'} /> : title}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 25,
    height: 45,
  },
  buttonElements: {
    height: '100%',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 17,
    textAlign: 'center',
    alignItems: 'center',
    color: '#FFF',
  },
});

export {CustomButton};
