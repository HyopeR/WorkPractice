import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import CodePush, {CodePushOptions} from 'react-native-code-push';
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

const options = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
} as CodePushOptions;

export default CodePush(options)(App);
