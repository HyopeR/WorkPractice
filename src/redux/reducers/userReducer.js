import {USER_LOGIN, USER_LOGOUT} from '../actions/userActions';

const initialState = {
  data: {},
  loading: false,
  loaded: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        data: {},
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
};
