// Extensions
import './src/core/extensions/toPromiseArray';

// Services
import * as Services from './src/services';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
