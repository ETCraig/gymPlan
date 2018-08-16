import React, {Component} from 'react';
import './Styles/Goals.css';

import axios from 'axios';
import deletex from '../Assets/delete-icon.png';
import edit from '../Assets/icons8-edit-30.png';
import {Link} from 'react-router-dom';

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
            this.setState({user: res.data});
        });
    }
    getUserGoals() {
        axios.get('/api/getUserGoals').then(res =>  {
            this.setState({allGoals: res.data});
        });
    }
    handleGoalInput(val) {
        this.setState({goal: val});
    }
    handleCreateGoal() {
        let promise = axios.post('/api/createUserGoal', 
        {content: this.state.goal});
        promise.then(res => {
            this.setState({allGoals: res.data});
            this.setState({goal: ''});
        });
    }
    goalPatch() {
        axios.patch('/api/editUserGoal').then(res => {

        })
    }
    deleteGoal(goal_id) {
        axios.delete(`/api/deleteUserGoal/${goal_id}`).then(res => {
            this.setState({allGoals: res.data});
        });
    }
    handleGoalChange(val) {
        this.setState({goal: val})
    }
    render() {
        let displayHomes;
        displayHomes = this.state.allGoals;
        return(
            <div className='Goals-Appp'>
                <div className='Goals-Dash-App'>
                <div className='Goals-Dash-Header'>
                    <h1 className='Goals-Title'>gymPlan</h1>
                    <button className='Goals-Logout'><a href="http://localhost:3000/auth/logout">Logout</a></button>
                </div>

                <div className='Goals-Dash-Profile'>
                    <div className='Profile-Img-Content'>
                        <img src={this.state.user.profile_picture} alt='Profile' className='Goals-Profile-Img' />
                    </div>
                    <div className='Goals-Profile-Info-Content'>
                        <span className='Goals-Profile-Name'>{this.state.user.first_name}</span>
                        <span className='Goals-Profile-Name'>{this.state.user.last_name}</span>
                    </div>
                </div>

                <div className='Goals-Dash-Navbar'>
                    <ul>
                        <Link to='/Goals'><li>My Goals</li></Link>
                        <br />
                        <Link to='/Stats'><li>Body Stats</li></Link>
                        <br />
                        <Link to='/Routines'><li>My Routines</li></Link>
                        <br />
                        <Link to='/Account'><li>Manage Account</li></Link>
                        <br />
                        <Link to='/Contact-Us'><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>

                <div className='Goals-Bodyy'>
                    <h1 className='Title'>My Goals</h1>
                    <div className='Goals-Content'>
                        <input type='text'onChange={(e) => this.handleGoalInput(e.target.value)} placeholder='Enter New Goal' className='Goal-Input' value={this.state.goal} />
                        <button onClick={this.handleCreateGoal} className='Goal-Btn'>Add Goal</button>
                        <div className='Goals-List'>
                        {displayHomes.map((goal, i) => {
                            return(
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