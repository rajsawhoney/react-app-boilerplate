import { axiosInstance } from "../../../auth/utils/axiosInstance";
import { SET_PROFILE } from "./types"

export const set_profile = ()=> (dispatch) =>{
  axiosInstance
    .get("get-current-user/")
    .then((res) => {
      // connection established here
      console.log(res.data);
      if(res.data.status){
          dispatch({
              type: SET_PROFILE,
              payload: res.data,
            });
        }
    }).catch(err=>{
        console.log("Err:",err)
    })
}
