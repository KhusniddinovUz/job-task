import {AuthAction} from "../actions/auth";
import {AuthActionTypes} from "../action-types/auth";

export interface authState {
    isAuthenticated: boolean,
    token: string,
}

const initialState = {
    isAuthenticated: false,
    token: null,
};

const auth = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                isAuthenticated: false,
                token: action.payload,
            }
        case AuthActionTypes.LOGIN_FAIL:
            return {
                isAuthenticated: false,
                token: null,
            }
        default:
            return state
    }
};

export default auth;