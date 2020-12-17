import PushNotification from 'react-native-push-notification';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

export const showNotification = (
  notification: FirebaseMessagingTypes.Notification,
) => {
  PushNotification.localNotification({
    title: notification.title,
    message: notification.body,
  });
};
