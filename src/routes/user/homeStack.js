import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
import {TabBar} from '../../components/commons/TabBar';

import HomePage from '../../components/pages/user/homePage';
import DiscoverPage from '../../components/pages/user/discoverPage';

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
        name="Discover"
        component={DiscoverPage}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: () => <Icon name={'globe'} size={20} color={'#FFF'} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeNavigation;
