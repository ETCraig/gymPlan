import React, {Component} from 'react';
import './Styles/Dashboard.css';

import axios from 'axios';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: []
        }
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then().catch(res => {
            console.log('error');
            this.props.history.push('/');
        });
        this.getUserInfo();
    }
    getUserInfo() {
        axios.get('/api/getUserInfo').then(res => this.setState({user: res.data}));
    }
    render() {
        return(
            <div className='Dash-App'>
                <div className='Dash-Header'>
                    <h1 className='Title'>gymPlan</h1>
                    <button className='Logout'><a href="http://localhost:3000/auth/logout">Logout</a></button>
                </div>

                <div className='Dash-Profile'>
                    <div className='Profile-Img-Content'>
                        <img src={this.state.user.profile_picture} alt='Profile' className='Profile-Img' />
                    </div>
                    <div className='Profile-Info-Content'>
                        <span className='Profile-Name'>{this.state.user.first_name}</span>
                        <span className='Profile-Name'>{this.state.user.last_name}</span>
                    </div>
                </div>

                <div className='Dash-Navbar'>
                    <ul>
                        <Link to='/Goals'><li>My Goals</li></Link>
                        <Link to='/Stats'><li>Body Stats</li></Link>
                        <Link to='/Routines'><li>Routines</li></Link>
                        <Link to='/Account'><li>Manage Account</li></Link>
                        <Link to='/Step1'><li>Create Routine</li></Link>
                        <Link to='/Contact-Us'><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dashboard;