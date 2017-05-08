import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';
import Routes from './routes/Routes';
import '../scss/index.scss';
import 'semantic-ui-css/components/icon.css';

render(
    <Routes />,
    document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}

