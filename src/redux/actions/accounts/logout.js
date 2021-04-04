  
import { axiosInstance } from "../../../auth/utils/axiosInstance";
import { LOGOUT_SUCCESS, LOGOUT_FAIL } from "./types";

export const logout = () => (dispatch) => {
  axiosInstance
    .post("/api/accounts/user/logout/", {
      refresh_token: localStorage.getItem("refresh_token"),
    })
    .then((res) => {
      axiosInstance.defaults.headers["Authorization"] = null;
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: false,
      });
    })
    .catch((err) => {
      console.log("Failed to logout the user!!!", err);
      dispatch({
        type: LOGOUT_FAIL,
      });
    });
};