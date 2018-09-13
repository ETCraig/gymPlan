import React, { Component } from 'react';
import './Step1.css';

import axios from 'axios';
import { Link } from 'react-router-dom'
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

import { Button } from 'antd';

class Step1 extends Component {
    constructor() {
        super();

        this.state = {
            user: [],
            routine: [],
            exercises: [],
            muscle_group: []
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
            this.setState({ user: res.data });
        });
    }
    getUserRoutine() {
        axios.get(`/api/getUserRoutine/${this.props.match.params.routine_id}`, console.log('sent', this.props.match.params.routine_id)).then(res => {
            console.log('res', res);
            this.setState({ routine: res.data[0] });
        });
    }
    getExercises() {
        axios.get('/api/getExercises').then(res => {
            this.setState({ exercises: res.data });
        });
    }
    render() {
        return (
            <div className='Step1-App'>
                <div className='Step1-Body'>
                <div className='Step1-Nav'>
                <Link to='/Routines'><Button className='Step1-Btn'>All Routines</Button></Link>
                <br /><br />
                <Link to={`/Routine/${this.props.match.params.routine_id}`}><Button className='Step1-Btn'>Routine: {this.state.routine.name}</Button></Link>
                <br /><br />
                <Link to={`/Step4/${this.props.match.params.routine_id}`}><Button className='Step1-Btn'>Search Exercises</Button></Link>
                </div>
                <div className='Step1-Carousel'>
                <StyleRoot>
                    <Coverflow 
                        displayQuantityOfSide={1}
                        navigation
                        infiniteScroll
                        enableHeading
                        media={{
                            '@media (max-width: 900px)': {
                              width: '600px',
                              height: '300px'
                            },
                            '@media (min-width: 900px)': {
                              width: '655px',
                              height: '600px'
                            }
                          }}
                        >
                            <Link to={`/Step2/${this.state.routine.routine_id}/Shoulders`}><img src='https://darebee.com/images/fitness/muscles/delts.jpg' alt='Shoulders' /></Link>
                            <Link to={`/Step2/${this.state.routine.routine_id}/Triceps`}><img src='https://darebee.com/images/fitness/muscles/triceps.jpg' alt='Triceps-Muscle-Group' /></Link>
                            <Link to={`/Step2/${this.state.routine.routine_id}/Chest`}><img src='https://darebee.com/images/fitness/muscles/pecs-chest.jpg' alt='Chest-Muscle-Group' /></Link>
                            <Link to={`/Step2/${this.state.routine.routine_id}/Abs`}><img src='https://darebee.com/images/fitness/muscles/abs-obliques.jpg' alt='Abs-Muscle-Group' /></Link>
                            <Link to={`/Step2/${this.state.routine.routine_id}/Lower Legs`}><img src='https://darebee.com/images/fitness/muscles/calves.jpg' alt='LowerLegs-Muscle-Group' /></Link>
                            <Link to={`/Step2/${this.state.routine.routine_id}/Biceps`}><img src='https://darebee.com/images/fitness/muscles/biceps.jpg' alt='Biceps-Muscle-Group' /></Link>
                            <Link to={`/Step2/${this.state.routine.routine_id}/Forearms`}><img src='https://darebee.com/images/fitness/muscles/forearms.jpg' alt='Forearms-Muscle-Group' /></Link>
                            <Link to={`/Step2/${this.state.routine.routine_id}/Back`}><img src='https://darebee.com/images/fitness/muscles/lats.jpg' alt='Back-Muscle-Group' /></Link>
                            <Link to={`/Step2/${this.state.routine.routine_id}/Upper Legs`}><img src='https://darebee.com/images/fitness/muscles/quads.jpg' alt='UpperLegs-Muscle-Group' /></Link>
                            <Link to={`/Step2/${this.state.routine.routine_id}/Cardio`}><img src='http://www.kettlebellstronginva.com/wp-content/uploads/2015/04/how-to-run-faster-1.jpg' alt='Cardio-Muscle-Group' /></Link>
                        </Coverflow>
                </StyleRoot>
                </div>
                </div>
            </div>
        );
    }
}

export default Step1;