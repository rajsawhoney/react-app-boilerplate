import { combineReducers } from "redux";
import accounts from "./reducers/accounts";
const reducers = combineReducers({
  accounts: accounts,
});

export default reducers;
