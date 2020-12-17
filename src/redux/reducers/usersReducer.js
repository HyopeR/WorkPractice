import {
  USERS_LOADING,
  USERS_COMPLETED,
  USERS_ERROR,
} from '../actions/usersActions';

const initialState = {
  data: [],
  loading: false,
  loaded: false,
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case USERS_COMPLETED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true,
      };

    case USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
};
