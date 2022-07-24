import {LoadingTypes} from "../action-types/loading";

export const startLoading = () => {
    return {
        type: LoadingTypes.LOADING_STARTED,
    }
};

export const endLoading = () => {
    return {
        type: LoadingTypes.LOADING_ENDED,
    }
}