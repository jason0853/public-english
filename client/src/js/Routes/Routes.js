import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';

const Routes = () => {
    return (
        <Router>
            <NavigationBar />
        </Router>
    );
};

export default Routes;

