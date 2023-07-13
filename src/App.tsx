import React, {useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import CodePush from 'react-native-code-push';
import {CodePushModule} from './services';
import {Storage} from './helpers/storage';
import {useSubjectState} from './utils/hooks';

const App = () => {
  const {mode, key} = useSubjectState<typeof CodePushModule.state>(
    CodePushModule.state,
    CodePushModule.subject,
    [],
  );

  useEffect(() => {
    CodePush.sync(CodePushModule.options);
  }, [key]);

  return (
    <SafeAreaView>
      <Text style={{fontSize: 28, alignSelf: 'center'}}>Hello World</Text>
      <Text style={{fontSize: 18, alignSelf: 'center'}}>{mode}</Text>
      <Text style={{fontSize: 18, alignSelf: 'center'}}>{key}</Text>
      <Button
        title={'Switch Mode'}
        onPress={async () => {
          const newMode =
            CodePushModule.mode === 'production' ? 'staging' : 'production';
          await CodePushModule.setMode(newMode);
        }}
      />

      <Button title={'Storage Clear'} onPress={() => Storage.clear()} />
    </SafeAreaView>
  );
};

export default App;
