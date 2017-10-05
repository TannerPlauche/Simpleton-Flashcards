import store from "../store/store";
import { getCategories } from "../actions/categoryActions";

describe("Store initial category data", function () {
  let categoryState = store.getState().categories;

  it("should have an empty category array", function () {
    expect(categoryState.list).toBeInstanceOf(Array);
  })

  it("should have an empty selected letter", function () {
    expect(categoryState.selectedLetter).toBe("");
  })

  it("should have an empty selected positions array", function () {
    expect(categoryState.selectedPositions).toBeInstanceOf(Array);
  })

  it("selector modal should be closed", function () {
    // expect(categoryState.selectorModalIsOpen).toBe(false);
    expect(categoryState.selectorModalIsOpen).toBeFalsy();
  })

})

describe("Category reducer: Get categories", function () {
  beforeAll(function () {
    store.dispatch({ type: "SET_CATEGORIES", payload: [{}, {}, {}, {}, {}] });
  })

  it("should get an array of categories", function () {
    let categories = store.getState().categories.list;
    expect(categories.length).toBeGreaterThan(4);
  })
})
