import React from 'react';

import Logo from '../common/Logo';
import Buttons from './Buttons';
import Greet from './Greet';

import introBg from '../../../img/intro_bg.jpg';

const Intro = () => {
    return (
        <div className="intro" style={{ backgroundImage: `url(${introBg})` }}>
            <div className="top">
                <Logo />
                <Buttons />
            </div>
            <Greet />
        </div>
    );
};

export default Intro;