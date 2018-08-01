import React, {Component} from 'react';
import './Styles/Goals.css';

import axios from 'axios';
import checkbox from '../Assets/checkbox-icon.png'
import Dashboard from './Dashboard';
import Delete from '../Assets/delete-icon.png';
import Edit from '../Assets/icons8-edit-30.png';


class Goals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            goalInput: ''
        }
        this.handleGoalInput = this.handleGoalInput.bind(this);
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then()
        this.getUserInfo();
    }
    getUserInfo() {
        axios.get('/api/getUserInfo').then(res => this.setState({user: res.data}));
    }
    createGoal() {

    }
    goalPatch() {

    }
    deleteGoal() {

    }
    handleGoalInput(val) {
        this.setState({Goal: val});
    }
    render() {
        return(
            <div className='Goals-App'>
                <Dashboard />
                <div className='Goals-Body'>
                    <h1 className='Title'>My Goals</h1>
                    <div className='Goals-Content'>
                        <input type='text' value={this.state.handleGoalInput} placeholder='Enter New Goal' className='Goal-Input'/>
                        <img src={checkbox} className='Goal-Checkbox' alt='Checkbox' />
                        <img src={Delete} className='Goal-Delete' alt='Delete' />
                        <img src={Edit} className='Goal-Edit' alt='Edit' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Goals;