import {ErrorTypes} from "../action-types/error";

export const addError = (error: string) => {
    return {
        type: ErrorTypes.ADD_ERROR,
        payload: error,
    }
};

export const removeError = () => {
    return {
        type: ErrorTypes.REMOVE_ERROR
    }
};