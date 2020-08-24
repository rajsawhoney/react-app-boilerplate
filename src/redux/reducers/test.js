import { TEST} from "../actions/types";
const initialState = {
  test: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        test: action.payload,
      };

    default:
      return state;
  }
};
