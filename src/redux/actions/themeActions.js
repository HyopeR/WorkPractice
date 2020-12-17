export const CHANGE_THEME = 'change_theme';

export const changeTheme = (type) => {
  return async (dispatch) => {
    dispatch({
      type: CHANGE_THEME,
      payload: type,
    });
  };
};
