import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import Routes from './Routes/Routes';
import '../scss/index.scss';

render(
    <Routes />,
    document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}

