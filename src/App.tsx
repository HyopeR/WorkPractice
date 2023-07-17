import React from 'react';
import {SafeAreaView} from 'react-native';
import {CodePushModule, CodePushModuleType} from './services';
import {useSubjectAction, useSubjectState} from './utils/hooks';
import Content from './Content';
import Splash from './Splash';

const App = () => {
  const ready = useSubjectState(
    CodePushModule.ready.value,
    CodePushModule.ready,
    [],
  );

  useSubjectAction<CodePushModuleType.State>(
    CodePushModule.subject,
    () => CodePushModule.syncAuto(),
    [],
  );

  return <SafeAreaView>{ready ? <Content /> : <Splash />}</SafeAreaView>;
};

export default App;
