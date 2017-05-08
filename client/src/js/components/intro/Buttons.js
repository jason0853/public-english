import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const Buttons = () => {
    return (
        <div className="intro-btns">
            <Button animated color="pink">
                <Button.Content visible><Icon name="sign in" /> Login</Button.Content>
                <Button.Content hidden>
                    Please, Login!
                </Button.Content>
            </Button>
            <Button animated color="pink">
                <Button.Content visible><Icon name="signup" /> Sign up</Button.Content>
                <Button.Content hidden>
                    Please, Sign up!
                </Button.Content>
            </Button>
        </div>
    );
};

export default Buttons;