import React from 'react';

import Logo from '../common/Logo';
import SignupForm from './SignupForm';

import signupBg from '../../../img/second_bg.jpg';

const Signup = () => {
    return (
        <div className="signup" style={{ backgroundImage: `url(${signupBg})` }}>
            <div className="top">
                <Logo />
            </div>
            <SignupForm />
        </div>
    );
};

export default Signup;