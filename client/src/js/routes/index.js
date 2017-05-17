import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IntroContainer from '../containers/IntroContainer';
import LoginContainer from '../containers/LoginContainer';
import SignupContainer from '../containers/SignupContainer';

const Routes = () => {

    return (
        <Router>
            <div>
                <Route exact path="/" component={IntroContainer} />
                <Route path="/login" component={LoginContainer} />
                <Route path="/signup" component={SignupContainer} />
            </div>
        </Router>
    );
};

export default Routes;

