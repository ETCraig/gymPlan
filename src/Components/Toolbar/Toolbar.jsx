import React from 'react';
import './Toolbar.css';

import DrawerToggle from '../SideDrawer/DrawerToggle';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar-nav'>
            <div>
                {/* <DrawerToggle click={props.drawerClickedHandler}/> */}
            </div>
            <div className='toolbar-logo'><Link to=''>gymPlan</Link></div>
            <div className='Spacer'></div>
            <div className='toolbar-nav-items'>
                <ul>
                    <li><a href={process.env.REACT_APP_LOGOUT}><Button type="primary">Logout</Button></a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;