export const IS_AUTH = "IS_AUTH";
export const ADD_TOKEN = "ADD_TOKEN";

export const isAuth = (boolean) => ({
  type: IS_AUTH,
  payload: boolean,
});

export const addToken = (data) => ({
  type: ADD_TOKEN,
  payload: data,
});
