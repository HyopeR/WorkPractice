import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const firebaseAuth = auth();
export const fireStore = firestore();
export const notificationApi = 'https://work-practice-backend.herokuapp.com/';
