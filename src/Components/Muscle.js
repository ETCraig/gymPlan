import React, {Component} from 'react';
import './Styles/Muscle.css';

class Muscle extends Component {
    render() {
        return(
            <div className='Exercises-App'>
                <div className='Dash-Header'>
                    <h1 className='Title'>gymPlan</h1>
                    <button className='Logout'><a href="http://localhost:3000/auth/logout">Logout</a></button>
                </div>

                <div className='Routine-Info'>
                    <div className='Routine-Details1'>
                        <span>{this.state.user.first_name} {this.state.user.last_name}</span>
                        <span>{this.state.routine.name}</span>
                        <span>{this.state.routine.day}</span>
                    </div>
                </div>

                <div className='Routine-Details2'>
                    <span>{this.state.routine.muscle}</span>
                    <span>{this.state.routine.type}</span>
                    <span>{this.state.routine.diff}</span>
                    <span>{this.state.routine.description}</span>
                </div>

                <Link to='/Routines'><button className='Return-Btn'>Routines</button></Link>
            </div>
        );
    }
}

export default Muscle;