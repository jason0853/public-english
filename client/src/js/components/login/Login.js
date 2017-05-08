import React from 'react';

import Logo from '../common/Logo';

import loginBg from '../../../img/login_bg.jpg';

const Login = () => {
    return (
        <div className="login" style={{ backgroundImage: `url(${loginBg})` }}>
            <div className="top">
                <Logo />
            </div>
        </div>
    );
};

export default Login;