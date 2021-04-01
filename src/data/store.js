import {createStore, compose } from "redux";
import initial from "./initial";
import reducers from "./reducers";
import persistState from "redux-localstorage";

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    reducers, 
    initial, 
    composeEnhancers(persistState()));

export default store;