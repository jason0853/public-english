import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { setCurrentUser } from './actions/auth';

import App from './containers/App';
import configureStore from './store/configureStore';
import '../scss/index.scss';
import 'semantic-ui-css/components/icon.css';

import setAuthorizationToken from './helpers/setAuthorizationToken';

const store = configureStore();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}


render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}