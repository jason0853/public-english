import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from '../components/intro/intro';

import Login from '../containers/Login';

import IntroImage from '../../img/intro_bg.jpg';

const Routes = () => {

    console.log(IntroImage);

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

