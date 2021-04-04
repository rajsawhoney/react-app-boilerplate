import { axiosInstance } from "../../../auth/utils/axiosInstance";
import { REFRESH_USER_STATUS } from "./types";

export const refresh_user_auth = () => (dispatch) => {
  axiosInstance
    .get("get-current-user/")
    .then((res) => {
      // connection established here
      console.log(res.data);
      localStorage.setItem("uuid", res.data?.user_id);
      if(res.data.status){
          dispatch({
              type: REFRESH_USER_STATUS,
              payload: { is_authenticated: true },
            });
        }
    })
    .catch((error) => {
      const originalRequest = error.config;
      if (
        error.response?.data.code === "token_not_valid" &&
        error.response?.status === 401 &&
        error.response?.statusText === "Unauthorized"
      ) {
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
          const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
          // exp date in token is expressed in seconds, while now() returns milliseconds:
          const now = Math.ceil(Date.now() / 1000);

          if (tokenParts.exp > now) {
            return axiosInstance
              .post("token/refresh/", { refresh: refreshToken })
              .then((response) => {
                localStorage.setItem("access_token", response.data.access);
                localStorage.setItem("refresh_token", response.data.refresh);
                dispatch({
                  type: REFRESH_USER_STATUS,
                  payload: {
                    is_authenticated: true,
                  },
                });

                axiosInstance.defaults.headers["Authorization"] =
                  "JWT " + response.data.access;
                originalRequest.headers["Authorization"] =
                  "JWT " + response.data.access;
                // set_profile();
                return axiosInstance(originalRequest);
              })
              .catch((err) => {
                console.log(err);
                dispatch({
                  type: REFRESH_USER_STATUS,
                  payload: {
                    is_authenticated: false,
                  },
                });
              });
          } else {
            dispatch({
              type: REFRESH_USER_STATUS,
              payload: { is_authenticated: false },
            });
            // window.location.href = "/login/";
          }
        } else {
          dispatch({
            type: REFRESH_USER_STATUS,
            payload: { is_authenticated: false },
          });
        }
      }
    });
};