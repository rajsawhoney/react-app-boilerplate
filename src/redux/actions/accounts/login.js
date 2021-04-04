import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
export const login = (success, response) => (dispatch) => {
  if (success) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response,
    });
  } else {
    dispatch({
      type: LOGIN_FAIL,
      payload: "Login Failed!!!!",
    });
  }
};