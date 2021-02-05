import { combineReducers } from "redux";
import test from "./reducers/test";
const reducers = combineReducers({
  test: test,
});

export default reducers;
