import React from 'react';

import Logo from '../common/Logo';
import SignupForm from './SignupForm';

import signupBg from '../../../img/second_bg.jpg';

const Signup = ({username}) => {
    return (
        <div className="signup" style={{ backgroundImage: `url(${signupBg})` }}>
            <div className="top">
                <Logo />
            </div>
            <SignupForm username={username}/>
        </div>
    );
};

export default Signup;