import React, {Component} from 'react';
import './Styles/Routines.css';

import axios from 'axios';
import Dashboard from './Dashboard';

class Routines extends Component {
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