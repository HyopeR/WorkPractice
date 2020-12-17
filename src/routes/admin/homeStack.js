import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import {TabBar} from '../../components/commons/TabBar';

import HomePage from '../../components/pages/admin/homePage';
import UsersPage from '../../components/pages/admin/usersPage';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      tabBarPosition={'bottom'}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name={'home'} size={20} color={'#FFF'} />,
        }}
      />
      <Tab.Screen
        name="Users"
        component={UsersPage}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: () => <Icon name={'users'} size={20} color={'#FFF'} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeNavigation;
