import {AuthActionTypes} from "../action-types/auth";

interface LoginSuccess {
    type: AuthActionTypes.LOGIN_SUCCESS;
    payload: string;
}

interface LoginFail {
    type: AuthActionTypes.LOGIN_FAIL;
}

interface RegisterSuccess {
    type: AuthActionTypes.REGISTER_SUCCESS;
    payload: string;
}

interface RegisterFail {
    type: AuthActionTypes.REGISTER_FAIL;
}

export type AuthAction = LoginSuccess | LoginFail | RegisterSuccess | RegisterFail;