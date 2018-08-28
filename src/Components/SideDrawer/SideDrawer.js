import React, { Component } from 'react';
import './SideDrawer.css';

import { Link } from 'react-router-dom';

import { Button, Drawer, Icon } from 'antd';

class sideDrawer extends Component {
  state = { visibel: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <div className='SideDraw'>
          <Icon type="menu-unfold" onClick={this.showDrawer} style={{ color: 'white', position: 'absolute', fontSize: '35px' }} className='Menu-Icon' />
        </div>
        <Drawer
          title="gymPlan Menu"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        <div className='List'>
          <li><Link to='/Goals' style={{color: '#333'}}>Goals</Link></li>
          <li><Link to='/Stats' style={{color: '#333'}}>Stats</Link></li>
          <li><Link to='/BMIcalc' style={{color: '#333'}}>BMI Calculator</Link></li>
          <li><Link to='/Routines' style={{color: '#333'}}>Routines</Link></li>
          <li><Link to='/Account' style={{color: '#333'}}>Account</Link></li>
          <li><Link to='/Contact-us' style={{color: '#333'}}>Contact Us</Link></li>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default sideDrawer;