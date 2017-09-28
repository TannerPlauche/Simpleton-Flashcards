import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "../reducers/authReducer";
import cardReducer from "../reducers/cardReducer";
import categoryReducer from "../reducers/categoryReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

let reducers = combineReducers({
    auth: authReducer,
    cards: cardReducer,
    categories: categoryReducer
});

let middleware = applyMiddleware(thunk, logger);

let store = createStore(reducers, middleware);
export default store;