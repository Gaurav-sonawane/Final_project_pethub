const initialstate = { login: false };

export default (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        login: action.payload,
      };
    default:
      return state;
  }
};
