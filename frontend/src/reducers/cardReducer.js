const defaultState = {cards: [], count: 0};

let cardReducer = (state = defaultState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case "LOG":
            newState.count++;
            break;
        default:
            return newState;
    }
    return newState;
};

export default cardReducer;