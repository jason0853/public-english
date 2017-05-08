import React from 'react';
import { Link } from 'react-router-dom';

import introImage from '../../../img/intro_bg.jpg';

const Intro = () => {
    return (
        <div className="intro" style={{ backgroundImage: `url(${introImage})` }}>
            <h1>
                <Link to="/">
                    Public English
                </Link>
            </h1>
        </div>
    );
};

export default Intro;