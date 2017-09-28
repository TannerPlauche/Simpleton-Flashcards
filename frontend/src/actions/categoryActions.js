// import store from "../store/store";
import axios from "axios";

// const getCategoriesAction = "GET_CATEGORIES";
export const SET_CATEGORIES_ACTION = "SET_CATEGORIES";
export const TOGGLE_SELECTOR_MODAL = "TOGGLE_SELECTOR_MODAL"
export const ADD_REMOVE_SELECTED_CATEGORY_POSITION = "ADD_REMOVE_SELECTED_CATEGORY_POSITION"

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

export const toggleCategorySelectorModal = (letter) => {
  return { type: TOGGLE_SELECTOR_MODAL, payload: letter };
}

export const addRemoveSelectedCategoryPosition = (position) => {
  return { type: ADD_REMOVE_SELECTED_CATEGORY_POSITION, payload: position }
}