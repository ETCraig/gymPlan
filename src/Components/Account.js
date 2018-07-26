import React, {Component} from 'react';
import './Styles/Account.css';

import Dashboard from './Dashboard';

class Account extends Component {
    render() {
        return(
            <div className='Account-App'>
                <Dashboard />
                <div className='Account-Body'>
                    <h1>Account Component</h1>
                </div>
            </div>
        );
    }
}

export default Account;