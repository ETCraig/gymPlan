import React, { Component } from 'react';
import './Styles/Routine.css';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

class Routine extends Component {
    constructor() {
        super();

        this.state = {
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
            this.setState({ user: res.data });
        });
    }
    getUserRoutine() {
        axios.get(`/api/getUserRoutine/${this.props.match.params.routine_id}`, console.log('sent', this.props.match.params.routine_id)).then(res => {
            console.log('res', res);
            this.setState({ routine: res.data[0] });
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
            this.setState({ exercises: res.data });
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
        return (
            <div className='Routine-App'>
                <div className='Routine-Body'>
                <img src={require('../Assets/Routine-Bkg.jpg')} alt='Gym Equipment' className='Routine-Bkg-Picture'/>
                    <div className='Routine-Routine-Info'>
                        <span><strong>Name:</strong> {this.state.user.first_name} {this.state.user.last_name}</span>
                        <span><strong>Routine Name:</strong> {this.state.routine.name}</span>
                        <span><strong>Routine Day:</strong> {this.state.routine.day}</span>
                        <span><strong>Routine Muscle:</strong> {this.state.routine.muscle}</span>
                        <span><strong>Routine Type:</strong> {this.state.routine.type}</span>
                        <span><strong>Routine Difficulty:</strong> {this.state.routine.diff}</span>
                        <span><strong>Routine Description:</strong> {this.state.routine.description}</span>
                    </div>
                    <div className='Routine-Nav'>
                        <Link to='/Routines'><Button className='Routine-Return-Btn'>All Routines</Button></Link>
                        <Button className='Routine-Return-Btn' onClick={() => this.deleteRoutine()} type='danger'>Delete Routine </Button>
                        <Link to={`/Step1/${this.state.routine.routine_id}`}><Button className='Routine-Return-Btn'>Add Exercises</Button></Link>
                    </div>
                <div id='List-Container'>
                    {displayRoutineExercises.map((exercise, i) => {
                        return (
                            <div key={i} className='Routine-Exercises'>
                                {/* <div className='Routine-Img'> */}
                                <img src={exercise.picture} alt='Motion Pic' />
                                {/* </div> */}
                                <div className='Routine-Text'>
                                    <h2><strong>Reps:</strong> <br />{exercise.name}</h2>
                                    <h2><strong>Equipment:</strong> <br />{exercise.equip}</h2>
                                    <h2><strong>Description:</strong> <br />{exercise.description}</h2>
                                    {/* <h2><strong>Exercise:</strong> <br />{exercise.defaultreps}</h2> */}
                                </div>
                                <div className='Routine-Return-Btn'>
                                    <Button onClick={() => this.removeExercise(exercise.exercise_id, this.state.routine.routine_id)}>
                                        <h2>Remove {exercise.name}</h2>
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
        );
    }
}

export default Routine;