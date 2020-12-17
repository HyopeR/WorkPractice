import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

import AuthenticationNavigation from './routes/authenticationStack';
import UserMainAndOtherNavigation from './routes/user/mainStackAndOthers';
import AdminMainAndOtherNavigation from './routes/admin/mainStackAndOthers';

import {useSelector} from 'react-redux';

const Router = () => {
  const userRepo = useSelector((state) => state.user);
  let initialRoute = userRepo.loaded
    ? userRepo.data.type === 'user'
      ? 'UserMain'
      : 'AdminMain'
    : 'Authentication';

  return (
    <RootStack.Navigator initialRouteName={initialRoute}>
      <RootStack.Screen
        name={'Authentication'}
        component={AuthenticationNavigation}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name={'UserMain'}
        component={UserMainAndOtherNavigation}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name={'AdminMain'}
        component={AdminMainAndOtherNavigation}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default Router;
