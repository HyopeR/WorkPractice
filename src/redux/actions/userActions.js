import {replace} from '../../services/RootNavigation';
import {
  firebaseAuth,
  fireStore,
  notificationApi,
} from '../../services/FirebaseRoot';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';

// Authentication Enums
export const REGISTER = 'register';
export const REGISTER_SUCCESS = 'register_success';
export const REGISTER_FAILED = 'register_failed';
export const LOGIN = 'login';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAILED = 'login_failed';
export const IS_LOGGED = 'is_logged';

// Authentication Enums
export const USER_LOGOUT = 'user_logout';
export const USER_LOGIN = 'user_login';

// User kaydı.
export const registerUser = (email, password, type) => {
  return async (dispatch) => {
    dispatch({
      type: REGISTER,
    });
    try {
      let controlData = await checkUserEmail(email);
      if (controlData.empty) {
        const user = await createUserWithEmailAndPassword(
          email,
          password,
          type,
        );
        await saveUser(user);

        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: USER_LOGIN,
          payload: user,
        });

        user.type === 'user' ? replace('UserMain') : replace('AdminMain');
      } else {
        dispatch({
          type: REGISTER_FAILED,
          payload: 'This e-mail address is used.',
        });
      }
    } catch (err) {
      console.log(err.toString());

      dispatch({
        type: REGISTER_FAILED,
        payload: err.toString(),
      });
    }
  };
};

// Giriş işlemi.
export const logIn = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN,
      });

      let controlData = await checkUserEmailAndPassword(email, password);
      if (!controlData.empty) {
        const userId = controlData.user.id;
        const user = await signInWithEmailAndPassword(email, password, userId);

        dispatch({
          type: LOGIN_SUCCESS,
        });

        dispatch({
          type: USER_LOGIN,
          payload: user,
        });

        user.type === 'user' ? replace('UserMain') : replace('AdminMain');
      } else {
        dispatch({
          type: LOGIN_FAILED,
          payload: 'Mail or password is incorrect.',
        });
      }
    } catch (err) {
      dispatch({
        type: LOGIN_FAILED,
        payload: err.toString(),
      });
    }
  };
};

// Çıkış işlemi.
export const logOut = (user) => {
  return async (dispatch) => {
    await firebase.messaging().deleteToken();
    await firebaseAuth.signOut();

    dispatch({
      type: IS_LOGGED,
      payload: false,
    });

    dispatch({
      type: USER_LOGOUT,
    });

    replace('Authentication');
  };
};

// User girişlerinde bildirim spawnı.
export const pushNotification = (user, tokens) => {
  return async (dispatch) => {
    if (user.type === 'user') {
      try {
        await fetch(notificationApi, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: user,
            tokens: tokens,
          }),
        });

        dispatch({
          type: IS_LOGGED,
          payload: true,
        });
      } catch (err) {
        console.log(err.toString());
      }
    }
  };
};

/* Yardımcı fonksiyonlar. */
// Başarısız kayıt denemesi.
export const failedRegister = (errorText) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_FAILED,
      payload: errorText,
    });
  };
};

// Başarısız giriş denemesi.
export const failedLogin = (errorText) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_FAILED,
      payload: errorText,
    });
  };
};

// Register sırasında email adresinin boş yada dolu olması.
export const checkUserEmail = async (email) => {
  const response = await fireStore
    .collection('users')
    .where('email', '==', `${email.trim()}`)
    .get();

  const isEmpty = response.docs.length < 1;
  if (isEmpty) {
    return {empty: isEmpty, user: null};
  } else {
    return {empty: isEmpty, user: response.docs[0]};
  }
};

// Login sırasında email ve şifre kontrolü.
export const checkUserEmailAndPassword = async (email, password) => {
  const response = await fireStore
    .collection('users')
    .where('email', '==', `${email.trim()}`)
    .where('password', '==', `${password}`)
    .get();

  const isEmpty = response.docs.length < 1;
  if (isEmpty) {
    return {empty: isEmpty, user: null};
  } else {
    return {empty: isEmpty, user: response.docs[0]};
  }
};

// User'id ile user getirilmesi.
export const getUserWithId = async (userId) => {
  const response = await fireStore.doc(`users/${userId}`).get();
  return response.data();
};

// Fire store user save.
export const saveUser = async (user) => {
  await fireStore.collection('users').doc(user.id).set(user);
};

// Register olan kullanıcının türüne göre değerler atanması.
export const createUserWithEmailAndPassword = async (email, password, type) => {
  const userCredential = await firebaseAuth.createUserWithEmailAndPassword(
    email,
    password,
  );
  const firebaseUser = userCredential.user;
  const userId = fireStore.collection('users').doc().id;
  let user = {
    email: firebaseUser.email,
    password: password,
    id: userId,
    type: type,
  };

  if (type === 'admin') {
    user.token = await messaging().getToken(
      firebase.app().options.messagingSenderId,
    );
  }

  return user;
};

// Login işlemleri sırasında gerekliliklerin sırasıyla yapılması.
export const signInWithEmailAndPassword = async (email, password, userId) => {
  await firebaseAuth.signInWithEmailAndPassword(email, password);
  let user = await getUserWithId(userId);

  if (user.type === 'admin') {
    const token = await messaging().getToken(
      firebase.app().options.messagingSenderId,
    );

    if (token !== user.token) {
      user.token = token;
      await fireStore.collection('users').doc(user.id).update({token: token});
    }
  }

  return user;
};
