import React from 'react';
import {StyleSheet, View} from 'react-native';

const Block = ({
  flex,
  row,
  column,
  center,
  middle,
  between,
  left,
  right,
  shadow,
  color,
  space,
  style,
  children,
  props,
}) => {
  let blockStyles = [
    styles.block,
    flex && {flex},
    flex === false && {flex: 0}, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    between && styles.between,
    left && styles.left,
    right && styles.right,
    shadow && styles.shadow,
    space && {justifyContent: `space-${space}`},
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
    style, // rewrite predefined styles
  ];

  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  between: {
    justifyContent: 'space-between',
  },

  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,

    elevation: 2,
  },
});

export default Block;
