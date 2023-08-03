export const IS_AUTH = "IS_AUTH";

export const isAuth = (boolean) => ({
  type: IS_AUTH,
  payload: boolean,
});
