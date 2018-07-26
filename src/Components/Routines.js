import React, {Component} from 'react';
import './Styles/Routines.css';

import Dashboard from './Dashboard';

class Routines extends Component {
    render() {
        return(
            <div className='Routines-App'>
                <Dashboard />
                <div className='Routines-Body'>
                    <h1>Routines Component</h1>
                </div>
            </div>
        );
    }
}

export default Routines;