import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Intro from '../components/intro/intro';
import Navbar from '../components/Navbar';

import IntroImage from '../../img/intro_bg.jpg';

const Routes = () => {

    console.log(IntroImage);

    return (
        <Router>
            <div 
                className="container"
                style={{ backgroundImage: `url(${IntroImage})` }}
            >
                <Intro />
                {/*<Navbar />*/}
            </div>
        </Router>
    );
};

export default Routes;

