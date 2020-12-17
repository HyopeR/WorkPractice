import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import HomeNavigation from './homeStack';
import ManageNavigation from './manageStack';

import {CustomDrawer} from '../../components/commons/Drawer';
import {CustomIcon} from '../../components/commons/CustomIcon';

const MainNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={HomeNavigation}
        options={{
          headerShown: false,
          drawerLabel: 'Home',
          tabBarIcon: () => <CustomIcon name={'home'} size={20} />,
        }}
      />
      <Drawer.Screen
        name="Manage"
        component={ManageNavigation}
        options={{
          headerShown: false,
          drawerLabel: 'Manage',
          tabBarIcon: () => <CustomIcon name={'thumb-tack'} size={20} />,
        }}
      />
    </Drawer.Navigator>
  );
};
export default MainNavigation;
