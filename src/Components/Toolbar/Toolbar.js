import React from 'react';
import './Toolbar.css';

import DrawerToggle from '../SideDrawer/DrawerToggle';
import GymIcon from '../../Assets/icons8-barbell-64.png';
import {Link} from 'react-router-dom';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar-nav'>
            <div>
                <DrawerToggle click={props.drawerClickedHandler}/>
            </div>
            <div className='toolbar-logo'><Link to=''>gymPlan</Link></div><img src={GymIcon} alt='GymIcon' />
            <div className='Spacer'></div>
            <div className='toolbar-nav-items'>
                <ul>
                    <li><a href={process.env.REACT_APP_LOGOUT}>Logout</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;