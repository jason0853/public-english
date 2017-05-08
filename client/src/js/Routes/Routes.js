import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from '../components/intro/intro';
import Login from '../containers/Login';

const Routes = () => {

    return (
        <Router>
            <div>
                <Route exact path="/" component={Intro} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
};

export default Routes;

