import React from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

const NavigationBar = () => {
    
    return (
        <Menu size="mini" className="header">
            <Menu.Item 
                name='home' 
            />
            <Menu.Item 
                name='mypage' 
            />

            <Menu.Menu position='right'>
                <Dropdown item text='Language'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Korean</Dropdown.Item>
                        <Dropdown.Item>English</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item>
                    <Button primary>Sign Up</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default NavigationBar;