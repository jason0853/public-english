import React from 'react';

import Buttons from './Buttons';

import introImage from '../../../img/intro_bg.jpg';

const Intro = () => {
    return (
        <div className="intro" style={{ backgroundImage: `url${introImage}` }}>
            {/*<h1>Let's play with english!</h1>*/}
        </div>
    );
};

export default Intro;