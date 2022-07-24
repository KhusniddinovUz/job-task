import * as React from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/hooks";
import {removeError} from "../../redux/action-creaters/error";
import {bindActionCreators} from "redux";
import {RootState} from "../../store";
import {useAlert,} from 'react-alert';

const Alerts: React.FC = () => {
    const dispatch = useAppDispatch();
    const removeErr = bindActionCreators(removeError, dispatch);
    const alert = useAlert();
    const error = useSelector<RootState, string>(state => state.error);
    if (error !== "") {
        alert.error(error);
        removeErr();
    }
    return (
        <div></div>
    )
};

export default Alerts;