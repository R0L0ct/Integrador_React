import { IS_AUTH } from "./auth.actions";

const INITIAL_STATE = {
  isAuth: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    default:
      return state;
  }
};
