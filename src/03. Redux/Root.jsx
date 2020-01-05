import React from 'react';
import Parent from "./components/Parent";
import { createStore } from "redux";
import reduxModule from './reduxModule'
import {Provider} from 'react-redux';
import '../app.css';

const store = createStore(reduxModule);

export default function Root() {
    return(
        <Provider store={store}>
            <Parent/>
        </Provider>
    );
}