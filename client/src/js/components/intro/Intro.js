import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Message } from 'semantic-ui-react';

import Logo from '../common/Logo';
import Buttons from './Buttons';
import Greet from './Greet';

import introBg from '../../../img/intro_bg.jpg';

const Intro = ({message}) => {
    const messageList = message.map(
        (msg) => (
            <Message 
                key={msg.get('id')} 
                content={msg.get('text')}
                className="success-message"
                color="green"
            />
        )
    );
    return (
        <div className="intro" style={{ backgroundImage: `url(${introBg})` }}>
            <div className="top">
                <Logo />
                <Buttons />
            </div>
            {messageList}
            <Greet />
        </div>
    );
};

Intro.propTypes = {
    message: PropTypes.instanceOf(List)
}

export default Intro;