import React from 'react';
import { Link } from 'react-router-dom';

import Buttons from './Buttons';
import Greet from './Greet';

import introImage from '../../../img/intro_bg.jpg';

const Intro = () => {
    return (
        <div className="intro" style={{ backgroundImage: `url(${introImage})` }}>
            <div className="top">
                <h1>
                    <Link to="/">
                        Public English
                    </Link>
                </h1>
                <Buttons />
            </div>
            <Greet />
        </div>
    );
};

export default Intro;