import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Buttons = () => {
    return (
        <div className="auth-button">
            <Button primary>
                <Icon 
                    disabled={false} 
                    name="sign in"
                />Login
            </Button>
            <Button primary>
                <Icon 
                    disabled={false} 
                    name="signup" 
                />Sign up
            </Button>
        </div>
    );
};

export default Buttons;