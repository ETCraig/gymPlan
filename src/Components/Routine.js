import React, {Component} from 'react';
import './Styles/Routine.css';

import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteRoutine from '../Assets/icons8-delete-document-16.png';
import DeleteIcon from '../Assets/icons8-delete-16.png';

import {Button} from 'antd';

class Routine extends Component {
    constructor() {
        super();

        this.state={
            user: [],
            routine: [],
            exercises: []
        }
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then().catch(res => {
            console.log('error');
            this.props.history.push('/');
        });
        this.getUserInfo();
        this.getUserRoutine();
        this.getRoutineExercises();
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
    deleteRoutine() {
        axios.delete(`/api/deleteUserRoutine/${this.props.match.params.routine_id}`).then(res => {
            this.props.history.push('/Routines');
        });
    }
    getRoutineExercises() {
        axios.get(`/api/getRoutineExercises/${this.props.match.params.routine_id}`).then(res => {
            console.log('res', res);
            this.setState({exercises: res.data});
        });
    }
    removeExercise(exercise_id, routine_id) {
        axios.delete(`/api/removeUserExercise/${exercise_id}/${routine_id}`).then(res => {
            res.data;
            this.getRoutineExercises();
        });
    }
    render() {
        let displayRoutineExercises;
        displayRoutineExercises = this.state.exercises;
        return(
            <div className='Routine-App'>
                {/* <div className='Routine-Dash-Header'>
                    <h1 className='Routine-Title'>gymPlan</h1>
                    <button className='Routine-Logout'><a href={process.env.REACT_APP_LOGOUT}>Logout</a></button>
                </div> */}

                <div className='Routine-Routine-Info'>
                    <div className='Routine-Routine-Details3' style={{color: '#ffffff'}}>
                        <span><strong>Name:</strong> {this.state.user.first_name} {this.state.user.last_name}</span>
                        <span><strong>Routine Name:</strong> {this.state.routine.name}</span>
                        <span><strong>Routine Day:</strong> {this.state.routine.day}</span>
                    </div>
                </div>

                <div className='Routine-Routine-Details'>
                    <span><strong>Routine Muscle:</strong> {this.state.routine.muscle}</span>
                    <span><strong>Routine Type:</strong> {this.state.routine.type}</span>
                    <span><strong>Routine Difficulty:</strong> {this.state.routine.diff}</span>
                    <span><strong>Routine Description:</strong> {this.state.routine.description}</span>
                </div>

                <Link to='/Routines'><Button className='Return-Btn'>All Routines</Button></Link>
                <br />
                <br />
                <Button className='Return-Btn' onClick={() => this.deleteRoutine()}>Delete Routine <img src={DeleteRoutine} alt='Delete-Routine' /></Button>
                <br />
                <Link to={`/Step1/${this.state.routine.routine_id}`}><Button>Add Exercises</Button></Link>
                <div id='List-Container'>
                    {displayRoutineExercises.map((exercise, i) => {
                        return(
                            <div key={i} className='Routine-Exercises'>
                                {/* <div className='Routine-Img'> */}
                                <img src={exercise.picture} alt='Motion Pic'/>
                                {/* </div> */}
                                <div className='Routine-Text'>
                                <h2><strong>Reps:</strong> <br />{exercise.name}</h2>
                                <h2><strong>Equipment:</strong> <br />{exercise.equip}</h2>
                                <h2><strong>Description:</strong> <br />{exercise.description}</h2>
                                {/* <h2><strong>Exercise:</strong> <br />{exercise.defaultreps}</h2> */}
                                </div>
                                <div className='Routine-Btn'>
                                <Button onClick={() => this.removeExercise(exercise.exercise_id, this.state.routine.routine_id)}>
                                    <h2>Remove {exercise.name} <img src={DeleteIcon} alt='Delete-Icon' className='Delete-Img' /></h2>
                                </Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Routine;