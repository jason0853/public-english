import React from 'react';

import Logo from '../common/Logo';
import LoginForm from './LoginForm';

import loginBg from '../../../img/second_bg.jpg';

const Login = () => {
    return (
        <div className="login" style={{ backgroundImage: `url(${loginBg})` }}>
            <div className="top">
                <Logo />
            </div>
            <LoginForm />
        </div>
    );
};

export default Login;