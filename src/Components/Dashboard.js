import React, {Component} from 'react';
import './Styles/Dashboard.css';

import {Link} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return(
            <div className='Dash-App'>
                <div className='Dash-Header'>
                    <h1 className='Title'>gymPlan</h1>
                    <button className='Logout'><a href="http://localhost:3000/auth/logout">Logout</a></button>
                </div>

                <div className='Dash-Profile'>
                    <div className='Profile-Img-Content'>
                        <img src='http://icreatived.com/wp-content/uploads/2014/10/Interesting-Creative-Facebook-Profile-Picture-Ideas-16.jpg' alt='Profile' className='Profile-Img' />
                    </div>
                    <div className='Profile-Info-Content'>
                        <span className='Profile-Name'>Ethan</span>
                        <span className='Profile-Name'>Craig</span>
                    </div>
                </div>

                <div className='Dash-Navbar'>
                    <ul>
                        <Link to='/Goals'><li>My Goals</li></Link>
                        <Link to='/Stats'><li>Body Stats</li></Link>
                        <Link to='/Routines'><li>Routines</li></Link>
                        <Link to='/Account'><li>Manage Account</li></Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dashboard;