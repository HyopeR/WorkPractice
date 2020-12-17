import {CHANGE_THEME} from '../actions/themeActions';

const initialState = {
  type: 'light',
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        type: action.payload,
      };

    default:
      return state;
  }
};
