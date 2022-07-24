import {combineReducers} from "redux";
import auth from "./auth";
import loading from "./loading";
import error from "./error";

const rootReducer = combineReducers({
    auth,
    loading,
    error,
});

export default rootReducer;