import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, TouchableHighlight, View} from 'react-native';

const IconButton = ({
  iconName = 'th-list',
  iconColor = '#FFF',
  iconSize = 20,
  onPress,
}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight
        underlayColor={colors.hoverShadow}
        style={styles.buttonTouch}
        onPress={onPress}>
        <View style={styles.buttonView}>
          <Icon name={iconName} color={iconColor} size={iconSize} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonTouch: {
    borderRadius: 10,
  },

  buttonView: {
    padding: 10,
  },
});

export {IconButton};
