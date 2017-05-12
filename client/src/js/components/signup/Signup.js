import React from 'react';

import Logo from '../common/Logo';
import SignupForm from './SignupForm';

import signupBg from '../../../img/second_bg.jpg';

const Signup = ({createUser, history}) => {
    return (
        <div className="signup" style={{ backgroundImage: `url(${signupBg})` }}>
            <div className="top">
                <Logo />
            </div>
            <SignupForm 
                createUser={createUser} 
                history={history}
            />
        </div>
    );
};

export default Signup;