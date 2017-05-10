import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './reducers/auth';

const store = createStore(
    combineReducers({
        auth
    }), 
    composeWithDevTools()
);

export default store;