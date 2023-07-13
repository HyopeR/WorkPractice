import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import * as Services from './src/services';

AppRegistry.registerComponent(appName, () => App);
