import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const Buttons = () => {
    return (
        <div className="auth-buttons">
            <Link to="/login">
                <Button primary>
                    <Icon 
                        disabled={false} 
                        name="sign in"
                    />Login
                </Button>
            </Link>
            <Link to="/signup">
                <Button primary>
                    <Icon 
                        disabled={false} 
                        name="signup" 
                    />Sign up
                </Button>
            </Link>
        </div>
    );
};

export default Buttons;