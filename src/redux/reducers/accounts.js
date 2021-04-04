import {
    RESET_PASSWORD,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    SET_PROFILE,
    REFRESH_USER_STATUS,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CHANGE_PASSWORD,
    UPDATE_PROFILE_PIC,
    UNAUTH,
  } from "../actions/accounts/types";
  import Alert from "../../components/utils/Alert";
  
  const initialState = {
    is_authenticated: false,
    is_admin:false,
    is_staff:false,
    is_loading: true,
    user_profile: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        Alert("Login Success!", 2000, "green");
        localStorage.setItem("access_token", action.payload.message.token.access);
        localStorage.setItem("refresh_token", action.payload.message.token.refresh);
        localStorage.setItem("uuid", action.payload.message.user_id);
        return { ...state, is_authenticated: true };
  
      case UNAUTH:
        return { ...state, is_loading: false, is_authenticated: false };
  
      case LOGIN_FAIL:
        return { ...state, is_authenticated: false };
  
      case UPDATE_PROFILE_PIC:
        if (action.payload.uploaded)
          Alert("Your Profile Pic Updated Successfully.", 3000, "green");
        else
          Alert(
            "Failed to Update your profile pic. Please try again later.",
            3000,
            "orange"
          );
        return {
          ...state,
          user_profile: {
            ...state.user_profile,
            profile_pic: action.payload.newpic
              ? action.payload.newpic
              : state.user_profile.profile_pic,
          },
        };
  
      case CHANGE_PASSWORD:
        if (action.payload.success) {
          Alert(action.payload.success, 3000, "green");
        } else if (action.payload.error) {
          Alert(action.payload.error, 3000, "red");
        }
        return { ...state };
  
      case RESET_PASSWORD:
        if (action.payload.status === "OK") {
          Alert(
            "Password Reset Success! You can now log in to your A/C using your brand new Password.",
            3000,
            "green"
          );
        } else if (action.payload.status === "notfound") {
          Alert(
            "Invalid Token or Already used Token or Expired Token!",
            3000,
            "orange"
          );
        }
        return { ...state };
  
      case SET_PROFILE:
          if(action.payload.user.role ==="ADMIN")
          state.is_admin=true
          else if(action.payload.user.role ==="STAFF")
          state.is_staff=true
        return { ...state, is_loading: false, user_profile: action.payload.user };
  
      case REFRESH_USER_STATUS:
        return {
          ...state,
          is_authenticated: action?.payload?.is_authenticated,
        };
  
      case LOGOUT_SUCCESS:
        Alert("Logged Out!", 2000, "orange");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("uuid");
        return {
          ...state,
          is_authenticated: false,
          user_profile: [],
        };
  
      case LOGOUT_FAIL:
        return state;
  
      default:
        return state;
    }
  };