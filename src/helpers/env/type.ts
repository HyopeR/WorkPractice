declare module 'react-native-config' {
  export interface NativeConfig extends Config {}
}

interface Config {
  CODE_PUSH_ANDROID_PRODUCTION_KEY: string;
  CODE_PUSH_ANDROID_STAGING_KEY: string;
  CODE_PUSH_IOS_PRODUCTION_KEY: string;
  CODE_PUSH_IOS_STAGING_KEY: string;
}

export {};
