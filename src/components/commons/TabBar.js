import React from 'react';
import {Footer, FooterTab} from 'native-base';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const TabBar = ({state, descriptors, navigation}) => {
  // let focusedOptions = descriptors[state.routes[state.index].key].options;
  const {colors} = useTheme();

  return (
    <Footer>
      <FooterTab style={{backgroundColor: colors.primary}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isHasIcon = options.tabBarIcon !== undefined;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View
              key={route.name}
              style={
                isFocused
                  ? [styles.wrapper, {backgroundColor: colors.hoverShadow}]
                  : styles.wrapper
              }>
              <TouchableHighlight
                onPress={onPress}
                underlayColor={colors.hoverShadow}>
                <View style={styles.tabView}>
                  {isHasIcon ? options.tabBarIcon() : null}
                  <Text style={{color: '#FFF'}}>{label}</Text>
                </View>
              </TouchableHighlight>
            </View>
          );
        })}
      </FooterTab>
    </Footer>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  tabView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {TabBar};
