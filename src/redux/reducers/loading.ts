import {Loading} from "../actions/loading";
import {LoadingTypes} from "../action-types/loading";

const initialState = false;

const loading = (state: boolean = initialState, action: Loading) => {
    switch (action.type) {
        case LoadingTypes.LOADING_STARTED:
            return true;
        case LoadingTypes.LOADING_ENDED:
            return false;
        default:
            return state;
    }
};

export default loading;
