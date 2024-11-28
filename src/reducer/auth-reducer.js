export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIAL STATE":
      return {
        ...state,
        token: payload,
      };
    case "USERNAME":
      return {
        ...state,
        username: payload,
      };

    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };

    case "TOKEN":
      return {
        ...state,
        token: payload,
      };
    case "CATEGORY":
      return {
        ...state,
        quizcategory: payload,
      };
    default:
      return state;
  }
};
