import {
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  IS_LOGGED,
} from '../actions/userActions';

const initialState = {
  isLogged: false,
  loading: false,
  registerError: null,
  loginError: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        registerError: null,
        loginError: null,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loginError: action.payload,
        loading: false,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        registerError: action.payload,
        loading: false,
      };

    case IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };

    default:
      return state;
  }
};
