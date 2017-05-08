import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const Buttons = () => {
    return (
        <div className="intro-btns">
            <Button animated color="pink">
                <Button.Content visible>
                    <Icon name="sign in" />Login
                </Button.Content>
                <Button.Content hidden>
                    <Link to="/login">Please, Login!</Link>
                </Button.Content>
            </Button>
            <Button animated color="pink">
                <Button.Content visible>
                    <Icon name="signup" />Sign up
                </Button.Content>
                <Button.Content hidden>
                    <Link to="/signup">Please, Sign up!</Link>
                </Button.Content>
            </Button>
        </div>
    );
};

export default Buttons;