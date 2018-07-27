import React, {Component} from 'react';
import './Styles/Account.css';

import axios from 'axios';
import Dashboard from './Dashboard';

class Account extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then().catch(res => {
            console.log('error');
            this.props.history.push('/');
        });
        // this.getUserInfo();
    }
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