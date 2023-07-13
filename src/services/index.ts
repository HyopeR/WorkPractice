import {CodePushService} from './CodePushService';
import {EnvService} from './EnvService';

const CodePushModule = new CodePushService();
const EnvModule = new EnvService();

export {CodePushModule, EnvModule};
