import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const ContactStack = createStackNavigator();
import ContactPage from '../../components/pages/user/contactPage';

const ContactNavigation = () => {
  return (
    <ContactStack.Navigator options={{headerShown: false}}>
      <ContactStack.Screen
        name="contact"
        component={ContactPage}
        options={{
          headerShown: false,
        }}
      />
    </ContactStack.Navigator>
  );
};
export default ContactNavigation;
