const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.user));
      localStorage.setItem('token', JSON.stringify(action.token));

      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };

    case 'LOGOUT':
      localStorage.clear();

      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
