import React from 'react';
import './DrawerToggle.css';

const drawerToggleButtons = props => (
    <button className='Toggle-Btn' onClick={props.click}>
        <div className='Toggle-Btn-Line' />
        <div className='Toggle-Btn-Line' />
        <div className='Toggle-Btn-Line' />
    </button>
);

export default drawerToggleButtons;