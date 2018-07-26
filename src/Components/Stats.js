import React, {Component} from 'react';
import './Styles/Stats.css';

import Dashboard from './Dashboard';

class Stats extends Component {
    render() {
        return(
            <div className='Stats-App'>
                <Dashboard />
                <div className='Stats-Body'>
                    <h1>Body Stats Component</h1>
                </div>
            </div>
        );
    }
}

export default Stats;