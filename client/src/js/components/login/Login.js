import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../common/Logo';
import LoginForm from './LoginForm';

import loginBg from '../../../img/second_bg.jpg';

const Login = ({ loginUser, history }) => {
    return (
        <div className="login" style={{ backgroundImage: `url(${loginBg})` }}>
            <div className="top">
                <Logo />
            </div>
            <LoginForm
                loginUser={loginUser}
                history={history}
            />
        </div>
    );
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired
}

export default Login;