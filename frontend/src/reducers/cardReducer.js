import {
  SET_CARDS_ACTION,
  ADD_SAVED_CARD_ACTION
} from "../actions/cardActions";
const defaultState = { cards: [], count: 0 };

let cardReducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "LOG":
      newState.count++;
      break;
    case SET_CARDS_ACTION:
      newState.cards = action.payload;
      break;
    case ADD_SAVED_CARD_ACTION:
      newState.cards.push(action.payload);
      break;
    default:
      return newState;
  }
  return newState;
};

export default cardReducer;
