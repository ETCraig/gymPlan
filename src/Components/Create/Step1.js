import React, {Component} from 'react';
import './Styles/Step1.css';

import axios from 'axios';
import {Link} from 'react-router-dom'

import {Button} from 'antd';

class Step1 extends Component {
    constructor() {
        super();

        this.state={
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
        axios.get('/api/getExercises').then(res => {
            this.setState({exercises: res.data});
        });
    }
    render() {
        return(
            <div className='Step1-App'>
                {/* <div className='Step1-Dash-Header'>
                    <h1 className='Step1-Title'>gymPlan</h1>
                    <button className='Step1-Logout'><a href={process.env.REACT_APP_LOGOUT}>Logout</a></button>
                </div> */}

                <div className='Step1-Routine-Info'>
                    <div className='Step1-Routine-Details3' style={{color: '#f2f2f2'}}>
                        <span><strong>Name:</strong> {this.state.user.first_name} {this.state.user.last_name}</span>
                        <span><strong>Routine Name:</strong> {this.state.routine.name}</span>
                        <span><strong>Routine Day:</strong> {this.state.routine.day}</span>
                    </div>
                </div>

                <div className='Step1-Routine-Details'>
                    <span><strong>Routine Muscle:</strong> {this.state.routine.muscle}</span>
                    <span><strong>Routine Type:</strong> {this.state.routine.type}</span>
                    <span><strong>Routine Difficulty:</strong> {this.state.routine.diff}</span>
                    <span><strong>Routine Description:</strong> {this.state.routine.description}</span>
                </div>

                <Link to='/Routines'><Button className='Return-Btn'>All Routines</Button></Link>
                <br /><br />
                <Link to={`/Routine/${this.props.match.params.routine_id}`}><Button className='Return-Btn'>Routine: {this.state.routine.name}</Button></Link>
                <br /><br />
                <Link to={`/Step4/${this.props.match.params.routine_id}`}><Button className='Search_Btn'>Search Exercises</Button></Link>
                <div className='Exersise-List'>
                    <div className='Step1-Both-Sides'>
                        <h2>Shoulders</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Shoulders`}><img src='https://darebee.com/images/fitness/muscles/delts.jpg' alt='Shoulders-Muscle-Group'/></Link>
                    </div>
                    <div className='Step1-Both-Sides'>
                        <h2>Triceps</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Triceps`}><img src='https://darebee.com/images/fitness/muscles/triceps.jpg' alt='Triceps-Muscle-Group'/></Link>
                    </div>
                    <div className='Step1-Both-Sides'>    
                        <h2>Chest</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Chest`}><img src='https://darebee.com/images/fitness/muscles/pecs-chest.jpg' alt='Chest-Muscle-Group'/></Link>
                    </div>
                    <div className='Step1-Both-Sides'>
                        <h2>Abs</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Abs`}><img src='https://darebee.com/images/fitness/muscles/abs-obliques.jpg' alt='Abs-Muscle-Group'/></Link>
                    </div>
                    <div className='Step1-Both-Sides'>
                        <h2>Lower Legs</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Lower Legs`}><img src='https://darebee.com/images/fitness/muscles/calves.jpg' alt='LowerLegs-Muscle-Group'/></Link>
                    </div>
                   
                    <br />
                    
                    <div className='Step1-Both-Sides'>
                        <h2>Biceps</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Biceps`}><img src='https://darebee.com/images/fitness/muscles/biceps.jpg' alt='Biceps-Muscle-Group'/></Link>
                    </div>
                    <div className='Step1-Both-Sides'>
                        <h2>Forearms</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Forearms`}><img src='https://darebee.com/images/fitness/muscles/forearms.jpg' alt='Forearms-Muscle-Group'/></Link>
                    </div>
                    <div className='Step1-Both-Sides'>
                        <h2>Back</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Back`}><img src='https://darebee.com/images/fitness/muscles/lats.jpg' alt='Back-Muscle-Group'/></Link>
                    </div>
                    <div className='Step1-Both-Sides'>
                        <h2>Upper Legs</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Upper Legs`}><img src='https://darebee.com/images/fitness/muscles/quads.jpg' alt='UpperLegs-Muscle-Group'/></Link>
                    </div>
                    <div className='Step1-Both-Sides'>
                        <h2>Cardio</h2>
                        <Link to={`/Step2/${this.state.routine.routine_id}/Cardio`}><img src='http://www.kettlebellstronginva.com/wp-content/uploads/2015/04/how-to-run-faster-1.jpg' alt='Cardio-Muscle-Group'/></Link>
                    </div>
                    </div>
                </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {

//     }
// }


// export default connect(mapStateToProps, {addRoutine, deleteRoutine})(Step1);
export default Step1;