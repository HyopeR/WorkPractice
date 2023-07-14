import {
  SyncOptions,
  CodePushOptions,
  DownloadProgressCallback,
  HandleBinaryVersionMismatchCallback,
  SyncStatusChangedCallback,
} from 'react-native-code-push';

export type DeploymentMode = 'production' | 'staging' | undefined;
export type State = {mode: DeploymentMode; key: string | undefined};

export type {CodePushOptions, SyncOptions};
export type SyncProcessOptions = {
  syncStatusChangedCallback?: SyncStatusChangedCallback;
  downloadProgressCallback?: DownloadProgressCallback;
  handleBinaryVersionMismatchCallback?: HandleBinaryVersionMismatchCallback;
};
