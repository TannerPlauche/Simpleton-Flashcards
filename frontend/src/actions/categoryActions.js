// import store from "../store/store";
import axios from "axios";

// const getCategoriesAction = "GET_CATEGORIES";
export const setCategoriesAction = "SET_CATEGORIES";

export const getCategories = () => {
  return (dispatch, getState) => {
    axios.get("/categories").then(response => {
      dispatch(setCategories(response.data));
    });
  };
};

export const setCategories = payload => {
  return { type: setCategoriesAction, payload: payload };
};
