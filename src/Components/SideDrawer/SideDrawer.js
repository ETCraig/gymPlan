import React from 'react';
import './SideDrawer.css';

import {Link} from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show) {
        drawerClasses = ['side-drawer open'];
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><Link to='/Goals'><a>Goals</a></Link></li>
                <li><Link to='/Stats'>Stats</Link></li>
                <li><Link to='/Routines'>Routines</Link></li>
                <li><Link to='/Account'>Account</Link></li>
                <li><Link to='/Contact-us'>Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;