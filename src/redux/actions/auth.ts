import {AuthActionTypes} from "../action-types/auth";

interface LoginSuccess {
    type: AuthActionTypes.LOGIN_SUCCESS;
    payload: string;
}

interface LoginFail {
    type: AuthActionTypes.LOGIN_FAIL;
}

export type AuthAction = LoginSuccess | LoginFail;