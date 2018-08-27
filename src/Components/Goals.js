import React, { Component } from 'react';
import './Styles/Goals.css';

import axios from 'axios';
import GoalIcon from '../Assets/icons8-survey-80.png';
import deletex from '../Assets/delete-icon.png';
import edit from '../Assets/icons8-edit-30.png';
import RoutineIcon from '../Assets/icons8-edit-property-80.png';
import DataIcon from '../Assets/icons8-combo-chart-80.png';
import ExIcon from '../Assets/icons8-weightlifting-80.png';

import { Input, Button } from 'antd';

class Goals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            allGoals: [],
            goal: props.content,
        }
        this.handleGoalInput = this.handleGoalInput.bind(this);
        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.handleCreateGoal = this.handleCreateGoal.bind(this);
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then()
        this.getUserInfo();
        this.getUserGoals();
    }
    getUserInfo() {
        axios.get('/api/getUserInfo').then(res => {
            this.setState({ user: res.data });
        });
    }
    getUserGoals() {
        axios.get('/api/getUserGoals').then(res => {
            this.setState({ allGoals: res.data });
        });
    }
    handleGoalInput(val) {
        this.setState({ goal: val });
    }
    handleCreateGoal() {
        let promise = axios.post('/api/createUserGoal',
            { content: this.state.goal });
        promise.then(res => {
            this.setState({ allGoals: res.data });
            this.setState({ goal: '' });
        });
    }
    goalPatch() {
        axios.patch('/api/editUserGoal').then(res => {

        })
    }
    deleteGoal(goal_id) {
        axios.delete(`/api/deleteUserGoal/${goal_id}`).then(res => {
            this.setState({ allGoals: res.data });
        });
    }
    handleGoalChange(val) {
        this.setState({ goal: val })
    }
    render() {
        let displayHomes;
        displayHomes = this.state.allGoals;
        return (
            <div className='Goals-Appp'>
                <div className='Goals-Dash-App'>

                    <div className='Goals-Dash-Profile'>
                        <div className='Profile-Img-Content'>
                            <img src={this.state.user.profile_picture} alt='Profile' className='Goals-Profile-Img' />
                        </div>
                        <div className='Goals-Profile-Info-Content'>
                            <span className='Goals-Profile-Name'>{this.state.user.first_name}</span>
                            <span className='Goals-Profile-Name'>{this.state.user.last_name}</span>
                            <div className='Desc-Content'>
                                <img src={GoalIcon} alt='Goal-Icon' />
                                <h1>Goals</h1>
                                <h2>S.M.A.R.T. is an acronym to remind you how to set a goal that maps out exactly what you need to do. These goals are Specific, Measurable, Attainable, Relevant, and Time-bound. Don't just stack up data you get from a fitness device. ... goals for yourself.</h2>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='Goals-Intro'>
                    <div className='Goals-Intro-List'>
                        <img src={RoutineIcon} alt='Routine-Icon' />
                        <h2>Personalized Workout Routines</h2>
                        <p>Create personalized workout programs tailored to your needs to keep you motivated</p>
                    </div>
                    <div className='Goals-Intro-List'>
                        <img src={ExIcon} alt='Routine-Icon' />
                        <h2>Hundreds of Exercises</h2>
                        <p>Select the exercises you want and assign them the reps and weight that fits your goals</p>
                    </div>
                    <div className='Goals-Intro-List'>
                        <img src={DataIcon} alt='Data-Icon' />
                        <h2>Analyze and Improve</h2>
                        <p>Analyze your workout data and progress to maximize results</p>
                    </div>
                </div>

                <div className='Goals-Bodyy' style={{ color: 'white' }}>
                    <h1 className='Title'>My Goals</h1>
                    <div className='Goals-Content'>
                        <Input type='text' onChange={(e) => this.handleGoalInput(e.target.value)} placeholder='Enter New Goal' className='Goal-Input' value={this.state.goal} />
                        <Button onClick={this.handleCreateGoal} className='Goal-Btn'>Add Goal</Button>
                        <div className='Goals-List'>
                            {displayHomes.map((goal, i) => {
                                return (
                                    <div key={i} className='Goals-Listings'>
                                        <div>Goal: {goal.content}</div>
                                        <div className='Goals-Icons'>
                                            <input onClick={() => this.deleteGoal(goal.goal_id)} type='image' className='Goal-Delete-Icon' src={deletex} alt='Delete Icon' />
                                            <input onClick={() => this.handleGoalChange()} type='image' className='Goal-Edit-Icon' src={edit} alt='Edit Icon' />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goals;