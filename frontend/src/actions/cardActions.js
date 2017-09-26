// import store from "../store/store";
import axios from "axios";

// const getCardsAction = "GET_CATEGORIES";
export const SET_CARDS_ACTION = "SET_CATEGORIES";
export const ADD_SAVED_CARD_ACTION = "Create_New_Card";

export const getCards = newCardData => {
  return (dispatch, getState) => {
    axios.get("/cards").then(response => {
      dispatch(setCards(response.data));
    });
  };
};

export const setCards = payload => {
  return { type: SET_CARDS_ACTION, payload: payload };
};

export const createNewCard = cardData => {
  console.log("posting", cardData);
  return (dispatch, getState) => {
    axios.post("/cards", cardData).then(response => {
      console.log("card response: ", response);
      dispatch(addSavedCard(response.data));
    });
  };
};

export const addSavedCard = savedCard => {
  return { type: ADD_SAVED_CARD_ACTION, payload: savedCard };
};
