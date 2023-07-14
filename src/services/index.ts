import {
  CodePushService,
  CodePushServiceType as CodePushModuleType,
} from './CodePushService';

const CodePushModule = CodePushService.getInstance();

export {CodePushModule};
export type {CodePushModuleType};
