import React, {Component} from 'react';
import './Styles/Stats.css';

import axios from 'axios';
import Dashboard from './Dashboard';

class Stats extends Component { 
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