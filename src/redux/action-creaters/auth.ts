import axios from "axios";
import {AuthActionTypes} from "../action-types/auth";
import {LoadingTypes} from "../action-types/loading";
import {Dispatch} from "redux";

export const login = (data: { email: string, password: string }) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: LoadingTypes.LOADING_STARTED
        });
        axios.post(`https://reqres.in/api/login`, data).then(response => {
            const token = response.data.token;
            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
                payload: token
            });
            dispatch({
                type: LoadingTypes.LOADING_ENDED
            });
        }).catch(error => {
            console.log(error.response.data.error);
            dispatch({
                type: AuthActionTypes.LOGIN_FAIL
            });
            dispatch({
                type: LoadingTypes.LOADING_ENDED
            });
        });

    }
};


export const register = (data: { email: string, password: string }) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: LoadingTypes.LOADING_STARTED
        });
        axios.post(`https://reqres.in/api/register`, data).then(response => {
            const token = response.data.token;
            dispatch({
                type: AuthActionTypes.REGISTER_SUCCESS,
                payload: token
            });

            dispatch({
                type: LoadingTypes.LOADING_ENDED
            });
        }).catch(error => {
            console.log(error.response.data.error);
            dispatch({
                type: AuthActionTypes.REGISTER_FAIL
            });
            dispatch({
                type: LoadingTypes.LOADING_ENDED
            });
        });

    }
};
