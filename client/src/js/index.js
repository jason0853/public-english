// import React from 'react';
// import { render } from 'react-dom';

// import App from './containers/App';
// import '../scss/index.scss';
// import 'semantic-ui-css/components/icon.css';

// render(
//     <App />,
//     document.getElementById('app')
// );

import { createStore } from 'redux';

const initialState = {
    username: 'Jason',
    age: 32,
    favorite: ['music', 'english', 'basketball']
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TEST':
            return {
                ...state,
                favorite: [...state.favorite.slice(0, 2)]
            }
        default: 
            return state; 
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type: 'TEST'
});

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}

