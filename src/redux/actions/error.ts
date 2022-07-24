import {ErrorTypes} from "../action-types/error";

interface AddError {
    type: ErrorTypes.ADD_ERROR;
    payload: string;
}

interface RemoveError {
    type: ErrorTypes.REMOVE_ERROR;
}

export type Error = AddError | RemoveError;