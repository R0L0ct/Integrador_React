import * as authActions from "../redux/authentication/auth.actions";
import { refreshToken } from "../api/data";

export const tokenRefresh = async (dispatch) => {
  try {
    const res = await refreshToken();
    dispatch(authActions.addToken(res.data));
    setTimeout(() => {
      tokenRefresh(dispatch);
    }, res.data.token.expiresIn * 1000 - 10000);
  } catch (error) {
    console.log(error);
  }
};

// export const setTimeToken = (dispatch, tokenState) => {
// };
