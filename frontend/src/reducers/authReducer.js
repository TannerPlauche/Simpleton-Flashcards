import _ from "lodash";
const defaultState = {user:{}};

export default (state = defaultState, action)=>{
    let newState = _.cloneDeep(state);

    return newState;
};