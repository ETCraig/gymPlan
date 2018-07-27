import React, {Component} from 'react';
import './Styles/Step1.css';

import axios from 'axios';
import Dashboard from '../Dashboard'; 

class Step1 extends Component {
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
            <div>
                <Dashboard />
            </div>
        );
    }
}

export default Step1;