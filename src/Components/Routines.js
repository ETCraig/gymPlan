import React, { Component } from 'react';
import './Styles/Routines.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
import RoutinesIcon from '../Assets/icons8-edit-property-80.png';

class Routines extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            allRoutines: [],
        }
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then().catch(res => {
            console.log('error');
            this.props.history.push();
        });
        this.getUserInfo();
        this.getUserRoutines();
    }
    getUserInfo() {
        axios.get('/api/getUserInfo').then(res => {
            this.setState({ user: res.data });
        });
    }
    getUserRoutines() {
        axios.get('/api/getUserRoutines').then(res => {
            this.setState({ allRoutines: res.data });
        });
    }

    render() {
        // let displayRoutines;
        // displayRoutines = this.state.allRoutines;

        this.state.allRoutines.sort((a, b) => a.routine_id > b.routine_id);
        let routineBtns = this.state.allRoutines.map((e, i) => {
            if (e.name) {
                return (
                    <Link to={`/Routine/${e.routine_id}`} key={i}>
                        <div className='Routine-Btn-Container'>
                            <span>{e.name}</span>
                        </div>
                    </Link>
                );
            } else {
                return (
                    <Link to={`/Create/${e.routine_id}`} key={i}>
                        <div className='Routine-Btn-Container' id='Create-Routine-Btn'>
                            <span>Create Routine</span>
                        </div>
                    </Link>
                );
            }
        });
        return (
            <div className='Routines-App'>
                <div className='Routines-Dash-App'>
                    {/* <div className='Routines-Dash-Header'>
                    <h1 className='Routines-Title'>gymPlan</h1>
                    <button className='Routines-Logout'><a href={process.env.REACT_APP_LOGOUT}>Logout</a></button>
                </div> */}

                    <div className='Routines-Dash-Profile'>
                        <div className='Routines-Profile-Img-Content'>
                            <img src={this.state.user.profile_picture} alt='Routines-Profile' className='Profile-Img' />
                        </div>
                        <div className='Routines-Profile-Info-Content'>
                            <span className='Routines-Profile-Name'>{this.state.user.first_name}</span>
                            <span className='Routines-Profile-Name'>{this.state.user.last_name}</span>
                            <div className='Desc-Content'>
                                <img src={RoutinesIcon} alt='Goal-Icon' />
                                <h1>Routines</h1>
                                <h2>Each routine should be carefully planned to your needs and current ability, both in regards to the days that you assign to each muscle group and to the types of exercises each has.</h2>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='Routines-Body' style={{ color: 'black' }}>
                    {/* <Link to='/Create'><button>Create New Routine</button></Link> */}
                    <div className='binsTitle'>
                        {/* <Link to = {`/Exercises/${this.props.match.params.id}`}><h1>Routine! {this.props.match.params.id}</h1></Link> */}
                    </div>
                    <div className='Routine-List'>
                        <h2>{routineBtns}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Routines;