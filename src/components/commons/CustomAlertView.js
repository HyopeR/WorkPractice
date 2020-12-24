import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {IconButton} from './IconButton';

const CustomAlertView = ({style, children, onPress}) => {
  const {colors} = useTheme();

  const textStyle = [style, {color: colors.notification}];

  return (
    <View style={[styles.alertWrapper]}>
      <View style={styles.alertLeftArea}>
        <Text style={textStyle}>{children}</Text>
      </View>

      <View style={styles.alertRightArea}>
        <IconButton
          iconName={'close'}
          iconSize={20}
          iconColor={colors.text}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alertWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  alertLeftArea: {
    flex: 1,
    justifyContent: 'center',
  },
  alertRightArea: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {CustomAlertView};
