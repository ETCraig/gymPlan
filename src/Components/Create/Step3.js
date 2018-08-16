import React, {Component} from 'react';
import './Styles/Step3.css';

import axios from 'axios';
import {Link} from 'react-router-dom';

class Step3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exercise: [],
            filtered: [],
            reps: '',
            weight: ''
        }
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then().catch(res => {
            console.log('error');
            this.props.history.push('/');
        });
        this.getUserInfo();
        this.getUserRoutine();
        this.getUserExercise();
        // this.filterExercises();
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
    getUserExercise() {
        axios.get(`/api/getUserExercise/${this.props.match.params.exercise_id}/${this.props.match.params.routine_id}`, console.log('sent', this.props.match.params.exercise_id)).then(res => {
            console.log('res', res);
            this.setState({exercise: res.data});
        });
    }
    addExercise(exercise_id, routine_id, reps, weight) {
        axios.post('/api/addUserExercise', {exercise_id, routine_id, reps, weight}).then(res => {
            res.data;
            this.getUserExercise();
        });
    }
    removeExercise(exercise_id, routine_id) {
        axios.delete(`/api/removeUserExercise/${exercise_id}/${routine_id}`).then(res => {
            res.data;
            this.getUserExercise();
        });
    }
    handleChange(prop, val) {
        this.setState({[prop]: val});
    }
    render() {
        const displayExercises = this.state.exercise.map((exercises, i) => {
            return(
                <div className='Exercise-Desc' key={i}>
                    <h1>{exercises.name}</h1>
                    <br />
                    <img src={exercises.picture} alt='Motion Pic' />
                    <h3><strong>Muscle Group:</strong> {exercises.muscle_group}</h3>
                    <h3><strong>Equipment:</strong> {exercises.equip}</h3>
                    <h3><strong>Description:</strong> {exercises.description}</h3>
                    <div className='Selectors'>
                    <h2><strong>Reps:</strong> </h2>
                    <select onChange={e => this.handleChange('reps', e.target.value)} value={this.state.reps}> 
                        <option defaultValue='...'>...</option>
                        <option value='0'>0</option>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                        <option value='25'>25</option>
                        <option value='30'>30</option>
                        <option value='35'>35</option>
                        <option value='40'>40</option>
                        <option value='45'>45</option>
                        <option value='50'>50</option>
                        <option value='55'>55</option>
                        <option value='60'>60</option>
                        <option value='65'>65</option>
                        <option value='70'>70</option>
                        <option value='75'>75</option>
                        <option value='80'>80</option>
                        <option value='85'>85</option>
                        <option value='90'>90</option>
                        <option value='95'>95</option>
                        <option value='100'>100</option>
                    </select>
                    <h2><strong>Weight:</strong> </h2>
                    <select onChange={e => this.handleChange('weight', e.target.value)} value={this.state.weight}>
                        <option defaultValue='...'>...</option>
                        <option value='0'>0</option>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                        <option value='25'>25</option>
                        <option value='30'>30</option>
                        <option value='35'>35</option>
                        <option value='40'>40</option>
                        <option value='45'>45</option>
                        <option value='50'>50</option>
                        <option value='55'>55</option>
                        <option value='60'>60</option>
                        <option value='65'>65</option>
                        <option value='70'>70</option>
                        <option value='75'>75</option>
                        <option value='80'>80</option>
                        <option value='85'>85</option>
                        <option value='90'>90</option>
                        <option value='95'>95</option>
                        <option value='100'>100</option>
                        <option value='105'>105</option>
                        <option value='110'>110</option>
                        <option value='115'>115</option>
                        <option value='120'>120</option>
                        <option value='125'>125</option>
                        <option value='130'>130</option>
                        <option value='135'>135</option>
                        <option value='140'>140</option>
                        <option value='145'>145</option>
                        <option value='150'>150</option>
                        <option value='155'>155</option>
                        <option value='160'>160</option>
                        <option value='165'>165</option>
                        <option value='170'>170</option>
                        <option value='175'>175</option>
                        <option value='180'>180</option>
                        <option value='185'>185</option>
                        <option value='190'>190</option>
                        <option value='195'>195</option>
                        <option value='200'>200</option>
                        <option value='205'>205</option>
                        <option value='210'>210</option>
                        <option value='215'>215</option>
                        <option value='220'>220</option>
                        <option value='225'>225</option>
                        <option value='230'>230</option>
                        <option value='235'>235</option>
                        <option value='240'>240</option>
                        <option value='245'>245</option>
                        <option value='250'>250</option>
                        <option value='255'>255</option>
                        <option value='260'>260</option>
                        <option value='265'>265</option>
                        <option value='270'>270</option>
                        <option value='275'>275</option>
                        <option value='280'>280</option>
                        <option value='285'>285</option>
                        <option value='290'>290</option>
                        <option value='295'>295</option>
                        <option value='300'>300</option>
                        <option value='305'>305</option>
                        <option value='310'>310</option>
                        <option value='315'>315</option>
                        <option value='320'>320</option>
                        <option value='325'>325</option>
                        <option value='330'>330</option>
                        <option value='335'>335</option>
                        <option value='340'>340</option>
                    </select>
                        <div className=''>
                            {exercises.is_in_routine === true ? (
                                <button onClick={() => this.removeExercise(exercises.exercise_id, this.state.routine.routine_id)}>
                                    <h2>Remove {exercises.name}</h2>
                                </button>
                            ) : (
                                <button onClick={() => this.addExercise(exercises.exercise_id, this.state.routine.routine_id, this.state.reps, this.state.weight)}>
                                    <h2>Add {exercises.name}</h2>
                                </button>
                             )}
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <div className='Step3-App'>
                <div className='Dash-Header'>
                    <h1 className='Title'>gymPlan</h1>
                    <button className='Logout'><a href={process.env.REACT_APP_LOGOUT}>Logout</a></button>
                </div>
                <div className='Step3-Body'>
                    <div className='Exercise-Detail'>
                        {displayExercises}               
                    </div>     
                    <div className='Guide-Btns'>
                        <Link to={`/Step2/${this.props.match.params.routine_id}/${this.state.exercise.muscle_group}`}><button>{this.state.exercise.muscle_group} : Exercises</button></Link>
                        <Link to={`/Step1/${this.props.match.params.routine_id}`}><button>Muscle Groups</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step3;