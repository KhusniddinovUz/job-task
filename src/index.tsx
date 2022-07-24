import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Provider as AlertProvider} from 'react-alert';
import store from "./store";
// @ts-ignore
import AlertTemplate from 'react-alert-template-basic';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} position="top center" timeout={4000}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AlertProvider>
    </Provider>
);