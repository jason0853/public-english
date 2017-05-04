import React, { Component } from 'react';
import reactIcon from '../../img/react.png';

class App extends Component {
    render() {
        return (
            <div>
                Hello World!!
                <img src={reactIcon} alt=""/>
            </div>
        );
    }
}

export default App;