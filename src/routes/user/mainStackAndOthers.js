import MainNavigation from './mainStack';
const MainAndOtherStack = createStackNavigator();

import OtherPage from '../../components/pages/user/otherPage';

import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {pushNotification} from '../../redux/actions/userActions';

const UserMainAndOtherNavigation = () => {
  const userRepo = useSelector((state) => state.user);
  const adminsRepo = useSelector((state) => state.admins);
  const authRepo = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (adminsRepo.loaded && !authRepo.isLogged) {
      dispatch(pushNotification(userRepo.data, adminsRepo.tokens));
    }
  }, [adminsRepo]);

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

export default UserMainAndOtherNavigation;
