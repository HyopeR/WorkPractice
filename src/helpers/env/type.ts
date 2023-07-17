declare module 'react-native-config' {
  export interface NativeConfig extends Config {}
}

interface Config {
  CODE_PUSH_SWITCH_SECRET_KEY: string;

  CODE_PUSH_ANDROID_SECRET_KEY: string;
  CODE_PUSH_ANDROID_PRODUCTION_KEY: string;
  CODE_PUSH_ANDROID_STAGING_KEY: string;

  CODE_PUSH_IOS_SECRET_KEY: string;
  CODE_PUSH_IOS_PRODUCTION_KEY: string;
  CODE_PUSH_IOS_STAGING_KEY: string;

  APP_UPLOAD_STORE_FILE: string;
  APP_UPLOAD_STORE_PASSWORD: string;
  APP_UPLOAD_KEY_ALIAS: string;
  APP_UPLOAD_KEY_PASSWORD: string;
}

export {};
