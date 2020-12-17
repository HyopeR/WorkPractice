import React, {useEffect} from 'react';

// Notifications
import {showNotification} from '../../services/ShowNotification';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';
const MainAndOtherStack = createStackNavigator();

import MainNavigation from './mainStack';
import OtherPage from '../../components/pages/admin/otherPage';
import firebase from '@react-native-firebase/app';

const AdminMainAndOtherNavigation = () => {
  useEffect(() => {
    firebase
      .messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then((x) => console.log(x))
      .catch((e) => console.log(e));

    firebase.messaging().onMessage((response) => {
      showNotification(response.notification);
    });
  }, []);

  return (
    <MainAndOtherStack.Navigator>
      <MainAndOtherStack.Screen
        name={'Main'}
        component={MainNavigation}
        options={{headerShown: false}}
      />

      <MainAndOtherStack.Screen
        name={'Other'}
        component={OtherPage}
        options={{headerShown: false}}
      />
    </MainAndOtherStack.Navigator>
  );
};

export default AdminMainAndOtherNavigation;
