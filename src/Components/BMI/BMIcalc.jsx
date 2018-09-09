import React, { Component } from 'react';
import './BMIcalc.css';

import axios from 'axios';
import BMIIcon from '../../Assets/icons8-calculator-80.png';

import { Input } from 'antd';

class BMIcalc extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: [],
      weight: 150,
      heightInches: 6,
      heightFeet: 5,
    }
    // let storedState = window.localStorage.getItem('AppState');
    // if (storedState) {
    //   this.state = JSON.parse(storedState);
    // }
  }
  componentDidMount() {
    axios.get('/api/checkLoggedIn').then().catch(res => {
        console.log('error');
        this.props.history.push('/');
    });
    this.getUserInfo();
}
  getUserInfo() {
    axios.get('/api/getUserInfo').then(res => {
        this.setState({ user: res.data });
    });
}
  // componentDidUpdate(prevProps, prevState) {
  //   window.localStorage.setItem('AppState', JSON.stringify(this.state));
  // }

  bmi() {
    let w = parseFloat(this.state.weight);
    let f = parseFloat(this.state.heightFeet);
    let i = parseFloat(this.state.heightInches);

    // Gracefully handle invalid values;
    w = isNaN(w) ? 0 : w;
    f = isNaN(f) ? 0 : f;
    i = isNaN(i) ? 0 : i;

    let h = f * 12 + i;
    let bmi = Math.round((w / Math.pow(h, 2)) * 7030) / 10;
    if (isNaN(bmi) || !isFinite(bmi) || bmi === 0) {
      return '';
    } else {
      return bmi;
    }
  }

  render() {
    return (
      <div className='BMI-App'>
      <div className='BMI-Body'>
      <img src={require('../../Assets/BMI-Calculator.jpg')} alt='BMI Picture' className='BMI-Bkg-Picture' />
      <div className="BMI">
        <div className="Row">
          <div className="Span1">
            <div className="FormControls">
              <label>Weight <small>Pounds</small></label>
              <Input type="tel" value={this.state.weight} onChange={(e) => this.setState({ weight: e.target.value })} className="Control" />
            </div>
          </div>
        </div>

        <div className="Row">
          <div className="Span1">
            <div className="FormControls">
              <label>Height <small>Feet</small></label>
              <Input type="tel" value={this.state.heightFeet} onChange={(e) => this.setState({ heightFeet: e.target.value })} className="Control" />
            </div>
          </div>

          <div className="Span1">
            <div className="FormControls">
              <label><small>Inches</small></label>
              <Input type="tel" value={this.state.heightInches} onChange={(e) => this.setState({ heightInches: e.target.value })} className="Control" />
            </div>
          </div>
        </div>

        <div className="Row">
          <div className="Span1">
            <div className="FormControls">
              <label>BMI</label>
              <Input value={this.bmi()} readOnly className="Control" />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default BMIcalc;