import {Platform} from 'react-native';
import CodePush from 'react-native-code-push';
import {Subject} from 'rxjs';
import {Mixin} from 'ts-mixer';
import {Singleton} from '../../helpers/class';
import {Env} from '../../helpers/env';
import {Storage} from '../../helpers/storage';
import {
  CodePushOptions,
  SyncProcessOptions,
  DeploymentMode,
  State,
} from './type';

class CodePushService extends Mixin(Singleton) {
  SyncStatus = CodePush.SyncStatus;
  DeploymentStatus = CodePush.DeploymentStatus;
  InstallMode = CodePush.InstallMode;
  CheckFrequency = CodePush.CheckFrequency;

  subject = new Subject<State>();

  #modeStorageKey = 'CodePushMode';
  #mode: DeploymentMode;

  #keys = {
    production: {
      android: Env.data.CODE_PUSH_ANDROID_PRODUCTION_KEY,
      ios: Env.data.CODE_PUSH_IOS_PRODUCTION_KEY,
    },
    staging: {
      android: Env.data.CODE_PUSH_ANDROID_STAGING_KEY,
      ios: Env.data.CODE_PUSH_IOS_STAGING_KEY,
    },
  };

  constructor() {
    super();
    this.#initialize();
  }

  #initialize = async () => {
    const mode = (await Storage.get(this.#modeStorageKey)) || 'production';
    await this.setMode(mode);
  };

  async sync({
    syncStatusChangedCallback,
    downloadProgressCallback,
    handleBinaryVersionMismatchCallback,
  }: SyncProcessOptions = {}) {
    return CodePush.sync(
      this.options,
      syncStatusChangedCallback,
      downloadProgressCallback,
      handleBinaryVersionMismatchCallback,
    );
  }

  get options() {
    return {
      deploymentKey: this.key,
      checkFrequency: CodePush.CheckFrequency.ON_APP_START,
      installMode: CodePush.InstallMode.IMMEDIATE,
    } as CodePushOptions;
  }

  get state() {
    return {
      mode: this.mode,
      key: this.key,
    };
  }

  get mode() {
    return this.#mode;
  }

  get key() {
    if (this.mode) {
      return Platform.select(this.#keys[this.mode]) as string;
    }
    return undefined;
  }

  async setMode(mode: DeploymentMode) {
    const success = await Storage.set(this.#modeStorageKey, mode);

    if (success) {
      this.#mode = mode;
      this.subject.next(this.state);
    }
  }
}

export default CodePushService;
