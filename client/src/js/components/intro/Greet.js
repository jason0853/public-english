import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';

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
                content="Let's get it started." 
                icon='right arrow' 
                labelPosition='right' 
            />
            
        </div>
    );
};

export default Greet;