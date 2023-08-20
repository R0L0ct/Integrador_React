import * as authActions from "../redux/authentication/auth.actions";
import { refreshToken } from "../api/data";

export const tokenRefresh = async (dispatch) => {
  try {
    const res = await refreshToken();
    dispatch(authActions.addToken(res.data));
    setTimeout(() => {
      tokenRefresh(dispatch);
    }, res.data.expiresIn * 1000 - 6000);
  } catch (error) {
    console.log(error);
  }
};

// export const setTimeToken = (dispatch, tokenState) => {
// };
