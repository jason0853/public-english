import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../common/Logo';
import SignupForm from './SignupForm';

import signupBg from '../../../img/second_bg.jpg';

const Signup = ({createUser, showSignupMessage, history}) => {
    return (
        <div className="signup" style={{ backgroundImage: `url(${signupBg})` }}>
            <div className="top">
                <Logo />
            </div>
            <SignupForm 
                createUser={createUser} 
                showSignupMessage={showSignupMessage}
                history={history}
            />
        </div>
    );
};

Signup.propTypes = {
    createUser: PropTypes.func.isRequired,
    showSignupMessage: PropTypes.func.isRequired
}


export default Signup;