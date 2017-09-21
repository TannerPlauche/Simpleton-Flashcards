import { setCategoriesAction } from "../actions/categoryActions";
// import _ from "lodash";
const defaultState = [];

// import {} from "redux";

export default (state = defaultState, action) => {
  let newState = state.slice();
  switch (action.type) {
    case setCategoriesAction:
      newState = action.payload;
      break;
    default:
      break;
  }
  return newState;
};
