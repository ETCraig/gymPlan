import React, {Component} from 'react';
import './Styles/Step2.css';

import axios from 'axios';
import {Link} from 'react-router-dom';

class Step2 extends Component {
    constructor() {
        super();

        this.state={
            user: [],
            routine: [],
            exercise: [],
        }
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then().catch(res => {
            console.log('error');
            this.props.history.push('/');
        });
        this.getUserInfo();
        this.getUserRoutine();
        this.getExercises();
    }
    getUserInfo() {
        axios.get('/api/getUserInfo').then(res => {
            this.setState({user: res.data});
        });
    }
    getUserRoutine() {
        axios.get(`/api/getUserRoutine/${this.props.match.params.routine_id}`, console.log('sent', this.props.match.params.routine_id)).then(res => {
            console.log('res', res);
            this.setState({routine: res.data[0]});
        });
    }
    getExercises() {
        axios.get(`/api/getExercise/${this.props.match.params.muscle_group}`).then(res => {
            this.setState({exercise: res.data});
        });
    }
    render() {
        let displayExercises;
        displayExercises = this.state.exercise;

        
        return(
            <div className='Step2-App'>
                
                {/* <div className='Step2-Dash-Header'>
                    <h1 className='Step2-Title'>gymPlan</h1>
                    <button className='Step2-Logout'><a href={process.env.REACT_APP_LOGOUT}>Logout</a></button>
                </div> */}

                <div className='Step2-Routine-Info'>
                    <div className='Step2-Routine-Details2'>
                    <span><strong>Name:</strong> {this.state.user.first_name} {this.state.user.last_name}</span>
                        <span><strong>Routine Name:</strong> {this.state.routine.name}</span>
                        <span><strong>Routine Day:</strong> {this.state.routine.day}</span>
                    </div>
                </div>

                <div className='Step2-Routine-Details'>
                <span><strong>Routine Muscle:</strong> {this.state.routine.muscle}</span>
                    <span><strong>Routine Type:</strong> {this.state.routine.type}</span>
                    <span><strong>Routine Difficulty:</strong> {this.state.routine.diff}</span>
                    <span><strong>Routine Description:</strong> {this.state.routine.description}</span>
                </div>

                <Link to={`/Step1/${this.props.match.params.routine_id}`}><button className='Step2-Return-Btn'>Muscle Groups</button></Link>
                <br /><br /><br />
                <Link to={`/Step3/${this.state.routine.routine_id}`}><button className='Step2-Return-Btn'>View Full Routine</button></Link>

                <div className='Step2-Body'>

                {displayExercises.map((exercises, i) => {
                    return(
                        <div className='Step2-Routine-List' key={i}>
                            <Link to={`/Step3/${this.state.routine.routine_id}/${exercises.exercise_id}`}><h2>{exercises.name}</h2></Link>
                            <img src={exercises.picture} alt='Motion Pic' />
                        </div>
                    )
                })}
                

                {/* <div className='Rendered-Exercise-List'>{renderExercises}</div>

                <div className='Pagenumber-Container'>
                    <ul className='PageNumbers'>{renderPageNumbers}</ul>
                </div> */}
                    </div>
                </div>
        );
    }
}

export default Step2;