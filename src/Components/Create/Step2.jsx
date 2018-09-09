import React, { Component } from 'react';
import './Styles/Step2.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

import { Button } from 'antd';

class Step2 extends Component {
    constructor() {
        super();

        this.state = {
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
        axios.get(`/api/getExercise/${this.props.match.params.muscle_group}`).then(res => {
            this.setState({ exercise: res.data });
        });
    }
    render() {
        let displayExercises;
        displayExercises = this.state.exercise;


        return (
            <div className='Step2-App'>
                <div className='Step2-Body'>
                <div className='Step2-Nav'>
                <Link to={`/Step1/${this.props.match.params.routine_id}`}><Button className='Step2-Btn'>Muscle Groups</Button></Link>
                <br /><br /><br />
                <Link to={`/Step3/${this.state.routine.routine_id}`}><Button className='Step2-Btn' id='btn-2'>View Full Routine</Button></Link>
                </div>
                
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
                              width: '775px',
                              height: '600px'
                            }
                          }}
                    >
                    {displayExercises.map((exercises, i) => {
                        return (
                        <Link key={i} to={`/Step3/${this.state.routine.routine_id}/${exercises.exercise_id}`}><img src={exercises.picture} alt='Motion Pic' className='Step2-Image' /></Link>
                    )
                })}
                    </Coverflow>
                </StyleRoot>
                
                    {/* {displayExercises.map((exercises, i) => {
                        return (
                            <div className='Step2-Routine-List' key={i}>
                                <Link to={`/Step3/${this.state.routine.routine_id}/${exercises.exercise_id}`}><h2>{exercises.name}</h2></Link>
                                <img src={exercises.picture} alt='Motion Pic' />
                            </div>
                        )
                    })} */}
                </div>
            </div>
        );
    }
}

export default Step2;