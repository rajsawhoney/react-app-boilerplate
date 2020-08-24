import { TEST } from "./types";

export const test = () => (dispatch) => {
  dispatch({
    type: NEW_SEARCH_TERM,
    payload: "test data",
  });
};
