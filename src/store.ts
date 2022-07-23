import {createStore} from 'redux';
import rootReducer from "./redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(),
);

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch