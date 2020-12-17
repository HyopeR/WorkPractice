import {fireStore} from '../../services/FirebaseRoot';

// Normal users enums
export const USERS_LOADING = 'users_loading';
export const USERS_COMPLETED = 'users_completed';
export const USERS_ERROR = 'users_error';

// Admin enums
export const ADMINS_LOADING = 'admin_loading';
export const ADMINS_COMPLETED = 'admin_completed';
export const ADMINS_ERROR = 'admin_error';

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: USERS_LOADING,
    });

    try {
      let response = await fireStore
        .collection('users')
        .where('type', '==', 'user')
        .get();

      let users = response.docs.map((doc) => doc.data());

      dispatch({
        type: USERS_COMPLETED,
        payload: users,
      });
    } catch (err) {
      console.log(err.toString());

      dispatch({
        type: USERS_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const streamAllAdmins = () => {
  return async (dispatch) => {
    await fireStore
      .collection('users')
      .where('type', '==', 'admin')
      .onSnapshot({
        error: (err) => {
          dispatch({
            type: ADMINS_ERROR,
            payload: err.toString(),
          });
        },
        next: (querySnapshot) => {
          let admins = querySnapshot.docs.map((doc) => doc.data());
          let tokens = admins.map((admin) => admin.token);

          dispatch({
            type: ADMINS_COMPLETED,
            payload: {admins: admins, tokens: tokens},
          });
        },
      });
  };
};
