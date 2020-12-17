import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AboutStack = createStackNavigator();
import AboutUsPage from '../../components/pages/user/aboutUsPage';

const AboutUsNavigation = () => {
  return (
    <AboutStack.Navigator options={{headerShown: false}}>
      <AboutStack.Screen
        name="about"
        component={AboutUsPage}
        options={{
          headerShown: false,
        }}
      />
    </AboutStack.Navigator>
  );
};

export default AboutUsNavigation;
