import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import '../scss/index.scss';

render(
    <App />,
    document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}

