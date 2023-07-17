import React from 'react';
import {Button, Text, View} from 'react-native';
import {CodePushModule, CodePushModuleType} from './services';
import {Storage} from './helpers/storage';
import {useSubjectState} from './utils/hooks';

const Content = () => {
  const {mode, key} = useSubjectState<CodePushModuleType.State>(
    CodePushModule.state,
    CodePushModule.subject,
    [],
  );

  return (
    <View style={{flexGrow: 1}}>
      <Text style={{fontSize: 28, alignSelf: 'center'}}>Work Practice v4</Text>
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
    </View>
  );
};

export default Content;
