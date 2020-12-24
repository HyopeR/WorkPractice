import React from 'react';
import {Image, StyleSheet, Switch, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import {CustomText} from './CustomText';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../redux/actions/themeActions';
import {CustomButton} from './CustomButton';
import {logOut} from '../../redux/actions/userActions';

const CustomDrawer = ({state, navigation, descriptors}) => {
  const {colors} = useTheme();
  const themeRepo = useSelector((state) => state.theme);
  const userRepo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <View>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&',
          }}
          style={styles.headerImage}
        />
      </View>
      <DrawerContentScrollView>
        <View style={styles.itemSection}>
          <View style={styles.itemSectionTitle}>
            <Icon name={'caret-right'} size={20} color={colors.text} />
            <CustomText style={{paddingLeft: 10}}>Main Menu</CustomText>
          </View>

          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.drawerLabel !== undefined
                ? options.drawerLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isHasIcon = options.tabBarIcon !== undefined;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'drawerItemPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <DrawerItem
                key={label}
                style={{flex: 1}}
                focused={isFocused}
                inactiveTintColor={colors.text}
                activeBackgroundColor={'rgba(200, 200, 200, 0.9)'}
                activeTintColor={colors.primary}
                label={label}
                onPress={onPress}
                icon={() => (isHasIcon ? options.tabBarIcon() : null)}
              />
            );
          })}
        </View>

        <View style={styles.itemSection}>
          <View style={styles.itemSectionTitle}>
            <Icon name={'caret-right'} size={20} color={colors.text} />
            <CustomText style={{paddingLeft: 10}}>Brightness</CustomText>
          </View>

          <Switch
            trackColor={{false: colors.primary, true: colors.primary}}
            thumbColor={themeRepo.type === 'light' ? '#FFF' : '#000'}
            ios_backgroundColor={colors.primary}
            onValueChange={() => {
              let type = themeRepo.type === 'light' ? 'dark' : 'light';
              dispatch(changeTheme(type));
            }}
            value={themeRepo.type === 'light'}
          />
        </View>
      </DrawerContentScrollView>

      <CustomButton
        title="Logout"
        onPress={() => {
          dispatch(logOut(userRepo.data));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  headerImage: {
    width: '100%',
    height: 180,
  },

  itemSection: {
    marginBottom: 5,
  },

  itemSectionTitle: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export {CustomDrawer};
