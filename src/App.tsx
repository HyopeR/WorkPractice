import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import RNConfig from 'react-native-config';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 28, alignSelf: 'center'}}>Hello World</Text>
      <Text style={{fontSize: 18, alignSelf: 'center'}}>
        {RNConfig.CODE_PUSH_PRODUCTION_KEY}
      </Text>
    </SafeAreaView>
  );
};

export default App;
