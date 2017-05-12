import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IntroContainer from '../containers/IntroContainer';
import Login from '../components/login/Login';
import SignupContainer from '../containers/SignupContainer';

const Routes = () => {

    return (
        <Router>
            <div>
                <Route exact path="/" component={IntroContainer} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignupContainer} />
            </div>
        </Router>
    );
};

export default Routes;

