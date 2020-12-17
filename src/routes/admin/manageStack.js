import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const ManageStack = createStackNavigator();
import ManagePage from '../../components/pages/admin/managePage';

const ContactNavigation = () => {
  return (
    <ManageStack.Navigator options={{headerShown: false}}>
      <ManageStack.Screen
        name="manage"
        component={ManagePage}
        options={{
          headerShown: false,
        }}
      />
    </ManageStack.Navigator>
  );
};
export default ContactNavigation;
