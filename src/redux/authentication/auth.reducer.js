import { ADD_TOKEN, IS_AUTH } from "./auth.actions";

const INITIAL_STATE = {
  isAuth: false,
  token: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
