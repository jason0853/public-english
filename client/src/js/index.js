import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './store';
import '../scss/index.scss';
import 'semantic-ui-css/components/icon.css';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    // module.hot.accept();
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}

