import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import {TabBar} from '../components/commons/TabBar';

import LoginPage from '../components/pages/loginPage';
import RegisterPage from '../components/pages/registerPage';

const AuthenticationNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      tabBarPosition={'bottom'}
      initialRouteName="login">
      <Tab.Screen
        name="login"
        component={LoginPage}
        options={{
          tabBarLabel: 'Login',
        }}
      />
      <Tab.Screen
        name="register"
        component={RegisterPage}
        options={{
          tabBarLabel: 'Register',
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticationNavigation;
