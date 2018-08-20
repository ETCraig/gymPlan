import React, { Component } from 'react';

import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

import Routes from './Router';

class App extends Component {
  state = {
    SideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };
  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  }
  render() {
    let backdrop;

    if(this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    };
    return (
      <div className="App">
      <Toolbar drawerClickedHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.SideDrawerOpen}/>
        {backdrop}
        {Routes}

      </div>
    );
  }
}

export default App;
