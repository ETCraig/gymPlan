import React, {Component} from 'react';
import './Styles/Goals.css';

import Dashboard from './Dashboard';

class Goals extends Component {
    render() {
        return(
            <div className='Goals-App'>
                <Dashboard />
                <div className='Goals-Body'>
                    <h1>GOALS COMPONENT</h1>
                </div>
            </div>
        );
    }
}

export default Goals;