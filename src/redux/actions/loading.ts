import {LoadingTypes} from "../action-types/loading";

interface LoadingStarted {
    type: LoadingTypes.LOADING_STARTED;
}

interface LoadingEnded {
    type: LoadingTypes.LOADING_ENDED;
}

export type Loading = LoadingStarted | LoadingEnded;