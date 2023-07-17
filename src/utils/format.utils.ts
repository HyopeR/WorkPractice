import CodePush from 'react-native-code-push';

export const localizeCodePushStatus = (value: number) => {
  switch (value) {
    case -1:
      return 'Sync pending...';
    case CodePush.SyncStatus.UP_TO_DATE:
      return 'Sync completed.';
    case CodePush.SyncStatus.UPDATE_INSTALLED:
      return 'Sync restarting.';
    case CodePush.SyncStatus.UNKNOWN_ERROR:
      return 'Sync failed.';
    case CodePush.SyncStatus.SYNC_IN_PROGRESS:
      return 'Sync loading...';
    case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
      return 'Sync fetching...';
    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
      return 'Sync downloading...';
    case CodePush.SyncStatus.INSTALLING_UPDATE:
      return 'Sync downloaded.';
    default:
      return '';
  }
};
