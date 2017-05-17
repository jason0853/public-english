import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { Message } from 'semantic-ui-react';
import setAuthorizationToken from '../../helpers/setAuthorizationToken';

import Logo from '../common/Logo';
import Buttons from './Buttons';
import Greet from './Greet';

import introBg from '../../../img/intro_bg.jpg';

class Intro extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            hidden: false
        }

        this.handleDismiss = this.handleDismiss.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleDismiss() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    logout(e) {
        e.preventDefault();
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        this.props.setCurrentUser({});
    }

    render() {
        
        const { message } = this.props;      
        
        const messageList = message.map(
            (msg) => (
                <Message 
                    key={msg.get('id')} 
                    content={msg.get('text')}
                    className="success-message"
                    color="green"
                    onDismiss={this.handleDismiss}
                    hidden={this.state.hidden}
                />
            )
        );
        return (
            <div className="intro" style={{ backgroundImage: `url(${introBg})` }}>
                <div className="top">
                    <Logo />
                    <Buttons 
                        auth={this.props.auth} 
                        logout={this.logout}
                    />
                </div>
                {messageList}
                <Greet />
            </div>
        );
    }
}

Intro.propTypes = {
    message: PropTypes.instanceOf(List).isRequired,
    auth: PropTypes.instanceOf(Map).isRequired,
    setCurrentUser: PropTypes.func.isRequired
}

export default Intro;