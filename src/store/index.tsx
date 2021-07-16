import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import files from './reducers/files'

let store: any;

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}

const reducer = combineReducers({
    files
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

if (composeEnhancers) {
    store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
} else {
    store = createStore(reducer, applyMiddleware(thunk));
}

export default store;