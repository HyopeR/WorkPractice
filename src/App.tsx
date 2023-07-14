import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {CodePushModule, CodePushModuleType} from './services';
import {Storage} from './helpers/storage';
import {useSubjectAction, useSubjectState} from './utils/hooks';

const App = () => {
  const [progress, setProgress] = useState(0);

  useSubjectAction<CodePushModuleType.State>(
    CodePushModule.subject,
    () => {
      CodePushModule.sync({
        downloadProgressCallback: ({receivedBytes, totalBytes}) => {
          setProgress((receivedBytes / totalBytes) * 100);
        },
      });
    },
    [],
  );

  const {mode, key} = useSubjectState<CodePushModuleType.State>(
    CodePushModule.state,
    CodePushModule.subject,
    [],
  );

  return (
    <SafeAreaView>
      <Text style={{fontSize: 28, alignSelf: 'center'}}>Work Practice 2</Text>
      <Text style={{fontSize: 18, alignSelf: 'center'}}>{mode}</Text>
      <Text style={{fontSize: 18, alignSelf: 'center'}}>{key}</Text>
      {Boolean(progress) && (
        <Text style={{fontSize: 18, alignSelf: 'center'}}>
          Progress: {progress}
        </Text>
      )}
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
