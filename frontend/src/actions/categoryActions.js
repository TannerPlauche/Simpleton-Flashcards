// import store from "../store/store";
import axios from "axios";

// const getCategoriesAction = "GET_CATEGORIES";
export const SET_CATEGORIES_ACTION = "SET_CATEGORIES";
export const TOGGLE_SELECTOR_MODAL = "TOGGLE_SELECTOR_MODAL"

export const getCategories = () => {
  return (dispatch, getState) => {
    axios.get("/categories").then(response => {
      dispatch(setCategories(response.data));
    });
  };
};

export const setCategories = payload => {
  return { type: SET_CATEGORIES_ACTION, payload: payload };
};

export const toggleCategorySelectorModal = () => {
  return { type: TOGGLE_SELECTOR_MODAL };
}
