import React from 'react';
import { Icon } from 'semantic-ui-react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="brand">
                <li>
                    <a href="#">
                        <Icon disabled={false} name="sign language" />Public English
                    </a>
                </li>
            </ul>
            <ul className="menu">
                <li><a href="#"><Icon disabled={false} name="signing" />Login</a></li>
                <li><a href="#"><Icon disabled={false} name="signup" />Sign Up</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;