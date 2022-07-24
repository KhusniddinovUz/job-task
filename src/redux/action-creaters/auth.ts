import axios from "axios";
import {AuthActionTypes} from "../action-types/auth";
import {AuthAction} from "../actions/auth";
import {Dispatch} from "redux";

export const login = (data: { email: string, password: string }) => {
    return (dispatch: Dispatch<AuthAction>) => {
        let token = "";
        axios.post(`https://reqres.in/api/login`, data).then(response => {
            token = response.data.token;
            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
                payload: token
            })
        }).catch(error => {
            console.log(error);
            dispatch({
                type: AuthActionTypes.LOGIN_FAIL
            })
        });

    }
};
