import {ErrorTypes} from "../action-types/error";
import {Error} from "../actions/error";

const initialState = "";

const error = (state: string = initialState, action: Error) => {
    switch (action.type) {
        case ErrorTypes.ADD_ERROR:
            return {
                initialState: action.payload,
            }
        case ErrorTypes.REMOVE_ERROR:
            return {
                initialState: "",
            }
        default:
            return state
    }
};

export default error;