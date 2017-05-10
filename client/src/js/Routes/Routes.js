import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from '../components/intro/intro';
import Login from '../components/login/Login';
import SignupContainer from '../containers/SignupContainer';

const Routes = () => {

    return (
        <Router>
            <div>
                <Route exact path="/" component={Intro} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignupContainer} />
            </div>
        </Router>
    );
};

export default Routes;

