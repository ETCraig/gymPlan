import React, {Component} from 'react';
import './SideDrawer.css';

import {Link} from 'react-router-dom';

import {Button, Drawer, Icon} from 'antd';

class sideDrawer extends Component {
    state = {visibel: false};

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
            <Icon type="menu-unfold" onClick={this.showDrawer} style={{color: 'white', position: 'absolute', fontSize: '35px'}} className='Menu-Icon'/>
            </div>
            <Drawer
              title="gymPlan Menu"
              placement="left"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
                <li><Link to='/Goals'>Goals</Link></li>
                <li><Link to='/Stats'>Stats</Link></li>
                <li><Link to='/BMIcalc'>BMI Calculator</Link></li>
                <li><Link to='/Routines'>Routines</Link></li>
                <li><Link to='/Account'>Account</Link></li>
                <li><Link to='/Contact-us'>Contact Us</Link></li>
            </Drawer>
          </div>
        );
      }
    }

export default sideDrawer;