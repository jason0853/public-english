import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

class Buttons extends Component {

    render() {
        const { auth, logout } = this.props;

        const guestButtons = (
            <div>
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
        const userButtons = (
            <Button animated color="pink">
                <Button.Content visible>
                    <Icon name="log out" />Logout
                </Button.Content>
                <Button.Content hidden>
                    <Link to="/" onClick={logout}>Logout!!</Link>
                </Button.Content>
            </Button>
        );
        return (
            <div className="intro-btns">
                {auth.get('isAuthenticated') ? userButtons : guestButtons }
            </div>

        )
    }
}

Buttons.propTypes = {
    auth: PropTypes.instanceOf(Map).isRequired,
    logout: PropTypes.func.isRequired
}

export default Buttons;