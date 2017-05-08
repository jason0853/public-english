import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Icon, Button, Label } from 'semantic-ui-react';

const Greet = () => {
    return (
        <div className="greet">
            <Header as='h2' icon>
                <Icon name='globe' color="blue" />
                <Header.Content>
                    Welcome
                </Header.Content>
            </Header>
            <Button 
                color="twitter"
                content={<Link to="/main">Let's get it started.</Link>}
                icon='right arrow' 
                labelPosition='right'
            />
        </div>
    );
};

export default Greet;