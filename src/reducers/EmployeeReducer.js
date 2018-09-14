import {
    EMPLOYEES_FETCH_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {

};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            // Organize by id, 
            // Take all records, create a new key value pair
            // wherein the key is the id of the record and value is the updated record , 
            // return { ...state, [id]: action.payload }
            return action.payload;
        default:
            return state;

    }
}
