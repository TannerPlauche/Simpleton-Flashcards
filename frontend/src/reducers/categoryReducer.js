import { SET_CATEGORIES_ACTION, TOGGLE_SELECTOR_MODAL } from "../actions/categoryActions";
import _ from "lodash";
const defaultState = {
  list: [],
  selectorModalIsOpen: false
};

export default (state = defaultState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case SET_CATEGORIES_ACTION:
      newState.list = action.payload;
      break;
    case TOGGLE_SELECTOR_MODAL:
      newState.selectorModalIsOpen = !newState.selectorModalIsOpen;
      break;
    default:
      break;
  }
  return newState;
};
