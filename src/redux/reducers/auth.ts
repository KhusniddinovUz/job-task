import {AuthAction} from "../actions/auth";
import {AuthActionTypes} from "../action-types/auth";

export interface authState {
    isAuthenticated: boolean,
    token: string,
}

const initialState = {
    isAuthenticated: true,
    token: null,
};

const auth = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
                token: action.payload,
            }
        case AuthActionTypes.LOGIN_FAIL:
            return {
                isAuthenticated: false,
                token: null,
            }
        case AuthActionTypes.REGISTER_SUCCESS:
            return {
                isAuthenticated: true,
                token: action.payload
            }
        case AuthActionTypes.REGISTER_FAIL: {
            return {
                isAuthenticated: false,
                token: null
            }
        }
        default:
            return state
    }
};

export default auth;