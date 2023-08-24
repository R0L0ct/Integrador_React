export const SET_RECOMMENDED = "SET_RECOMMENDED";
export const SET_CHECK_LOADER = "SET_CHECK_LOADER";

export const setRecommended = (data) => ({
  type: SET_RECOMMENDED,
  payload: data,
});

export const setCheckLoader = (data) => ({
  type: SET_CHECK_LOADER,
  payload: data,
});
