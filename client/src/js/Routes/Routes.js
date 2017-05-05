import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Routes = () => {
    return (
        <Router>
            <div className="container">
                <Navbar />
            </div>
        </Router>
    );
};

export default Routes;

