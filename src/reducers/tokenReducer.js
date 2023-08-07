export const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      localStorage.setItem("token", action.token)
      return {
        ...state,
        token: action.token
      };

    default:
      return state;
  }
};

export default tokenReducer;
