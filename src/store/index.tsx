import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store;

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}

const reducer = combineReducers({

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

if (composeEnhancers) {
    store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
} else {
    store = createStore(reducer, applyMiddleware(thunk));
}

export default store;