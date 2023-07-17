import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {CodePushModule} from './services';
import {useSubjectState} from './utils/hooks';
import {localizeCodePushStatus} from './utils/format.utils';

const Splash = () => {
  const status = useSubjectState(
    CodePushModule.status.value,
    CodePushModule.status,
    [],
  );

  useEffect(() => {
    switch (status) {
      case CodePushModule.SyncStatus.UP_TO_DATE:
      case CodePushModule.SyncStatus.UNKNOWN_ERROR:
        setTimeout(() => CodePushModule.ready.next(true), 1000);
        break;

      default:
        break;
    }
  }, [status]);

  return (
    <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 28, alignSelf: 'center'}}>Loading...</Text>
      <Text style={{fontSize: 28, alignSelf: 'center'}}>
        Status: {localizeCodePushStatus(status)}
      </Text>
    </View>
  );
};

export default Splash;
