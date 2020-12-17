import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const CustomTextInput = ({
  text,
  inputPlaceHolder,
  onChangeText,
  value,
  secureTextEntry,
}) => {
  const {inputWrapper, textStyle, inputStyle, inputArea} = styles;
  const {colors} = useTheme();

  return (
    <View style={inputWrapper}>
      <Text style={[textStyle, {color: colors.text}]}> {text} </Text>
      <TouchableHighlight style={inputArea}>
        <TextInput
          style={[inputStyle, {color: colors.text}]}
          secureTextEntry={secureTextEntry}
          placeholder={inputPlaceHolder}
          placeholderTextColor={colors.placeholderText}
          onChangeText={onChangeText}
          value={value}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    height: 50,
    width: 'auto',
    marginVertical: 5,
    alignItems: 'center',
  },
  textStyle: {
    width: '30%',
  },
  inputStyle: {
  },
  inputArea: {
    width: '70%',
  },
});

export {CustomTextInput};
