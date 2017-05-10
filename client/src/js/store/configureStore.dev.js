import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer, 
        composeWithDevTools(
            applyMiddleware(promise())
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index').default;
            store.replaceReducer(nextReducer);
        });

    }
    return store;
}