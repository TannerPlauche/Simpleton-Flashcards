import { ADD_REMOVE_SELECTED_CATEGORY_POSITION, SET_CATEGORIES_ACTION, TOGGLE_SELECTOR_MODAL } from "../actions/categoryActions";
import _ from "lodash";
const defaultState = {
  list: [],
  selectedLetter: "",
  selectedPositions: [],
  selectorModalIsOpen: false
};

export default (state = defaultState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {

    case SET_CATEGORIES_ACTION:
      newState.list = action.payload;
      break;

    case TOGGLE_SELECTOR_MODAL:
      newState.selectedLetter = action.payload;
      newState.selectorModalIsOpen = !newState.selectorModalIsOpen;
      break;

    case ADD_REMOVE_SELECTED_CATEGORY_POSITION:
      let { selectedPositions } = newState;
      let position = action.payload;
      if (!_.includes(selectedPositions, position)) {
        selectedPositions.push(position)
      } else {
        selectedPositions.splice(selectedPositions.indexOf(position), 1)
      }
      break;
    default:
      break;
  }
  return newState;
};
