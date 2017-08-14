import { combineReducers, createStore } from "redux";
import authReducer from "../reducers/authReducer";
import cardReducer from "../reducers/cardReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  auth: authReducer,
  cards: cardReducer
});

let store = createStore;
