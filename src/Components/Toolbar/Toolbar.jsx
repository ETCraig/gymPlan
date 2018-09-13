import React from 'react';
import './Toolbar.css';

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
                    <Link to='/'><li><Button type="primary">Logout</Button></li></Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;