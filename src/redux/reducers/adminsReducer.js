import {ADMINS_COMPLETED, ADMINS_ERROR} from '../actions/usersActions';

const initialState = {
  data: [],
  tokens: [],
  loaded: false,
  error: null,
};

export const adminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMINS_COMPLETED:
      return {
        ...state,
        admins: action.payload.admins,
        tokens: action.payload.tokens,
        loaded: true,
      };

    case ADMINS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
