import React, {Component} from 'react';
import './Styles/Step3.css';

import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteIcon from '../../Assets/icons8-delete-16.png';
import AddIcon from '../../Assets/icons8-plus-16.png';

import {Button, Select} from 'antd'

const Option = Select.option;

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
                    <Select onChange={e => this.handleChange('reps', e.target.value)} onChange={this.handleChange} value={this.state.reps}> 
                        <Option defaultValue='...'>...</Option>
                        <Option value='0'>0</Option>
                        <Option value='5'>5</Option>
                        <Option value='10'>10</Option>
                        <Option value='15'>15</Option>
                        <Option value='20'>20</Option>
                        <Option value='25'>25</Option>
                        <Option value='30'>30</Option>
                        <Option value='35'>35</Option>
                        <Option value='40'>40</Option>
                        <Option value='45'>45</Option>
                        <Option value='50'>50</Option>
                        <Option value='55'>55</Option>
                        <Option value='60'>60</Option>
                        <Option value='65'>65</Option>
                        <Option value='70'>70</Option>
                        <Option value='75'>75</Option>
                        <Option value='80'>80</Option>
                        <Option value='85'>85</Option>
                        <Option value='90'>90</Option>
                        <Option value='95'>95</Option>
                        <Option value='100'>100</Option>
                    </Select>
                    <h2><strong>Weight:</strong> </h2>
                    <Select onChange={e => this.handleChange('weight', e.target.value)} onChange={this.handleChange} value={this.state.weight}>
                        <Option defaultValue='...'>...</Option>
                        <Option value='0'>0</Option>
                        <Option value='5'>5</Option>
                        <Option value='10'>10</Option>
                        <Option value='15'>15</Option>
                        <Option value='20'>20</Option>
                        <Option value='25'>25</Option>
                        <Option value='30'>30</Option>
                        <Option value='35'>35</Option>
                        <Option value='40'>40</Option>
                        <Option value='45'>45</Option>
                        <Option value='50'>50</Option>
                        <Option value='55'>55</Option>
                        <Option value='60'>60</Option>
                        <Option value='65'>65</Option>
                        <Option value='70'>70</Option>
                        <Option value='75'>75</Option>
                        <Option value='80'>80</Option>
                        <Option value='85'>85</Option>
                        <Option value='90'>90</Option>
                        <Option value='95'>95</Option>
                        <Option value='100'>100</Option>
                        <Option value='105'>105</Option>
                        <Option value='110'>110</Option>
                        <Option value='115'>115</Option>
                        <Option value='120'>120</Option>
                        <Option value='125'>125</Option>
                        <Option value='130'>130</Option>
                        <Option value='135'>135</Option>
                        <Option value='140'>140</Option>
                        <Option value='145'>145</Option>
                        <Option value='150'>150</Option>
                        <Option value='155'>155</Option>
                        <Option value='160'>160</Option>
                        <Option value='165'>165</Option>
                        <Option value='170'>170</Option>
                        <Option value='175'>175</Option>
                        <Option value='180'>180</Option>
                        <Option value='185'>185</Option>
                        <Option value='190'>190</Option>
                        <Option value='195'>195</Option>
                        <Option value='200'>200</Option>
                        <Option value='205'>205</Option>
                        <Option value='210'>210</Option>
                        <Option value='215'>215</Option>
                        <Option value='220'>220</Option>
                        <Option value='225'>225</Option>
                        <Option value='230'>230</Option>
                        <Option value='235'>235</Option>
                        <Option value='240'>240</Option>
                        <Option value='245'>245</Option>
                        <Option value='250'>250</Option>
                        <Option value='255'>255</Option>
                        <Option value='260'>260</Option>
                        <Option value='265'>265</Option>
                        <Option value='270'>270</Option>
                        <Option value='275'>275</Option>
                        <Option value='280'>280</Option>
                        <Option value='285'>285</Option>
                        <Option value='290'>290</Option>
                        <Option value='295'>295</Option>
                        <Option value='300'>300</Option>
                        <Option value='305'>305</Option>
                        <Option value='310'>310</Option>
                        <Option value='315'>315</Option>
                        <Option value='320'>320</Option>
                        <Option value='325'>325</Option>
                        <Option value='330'>330</Option>
                        <Option value='335'>335</Option>
                        <Option value='340'>340</Option>
                    </Select>
                        <div className=''>
                            {exercises.is_in_routine === true ? (
                                <Button onClick={() => this.removeExercise(exercises.exercise_id, this.state.routine.routine_id)}>
                                    <h2>Remove {exercises.name} <img src={DeleteIcon} alt='Delete-Icon' className='Btn-Img' /></h2>
                                </Button>
                            ) : (
                                <Button onClick={() => this.addExercise(exercises.exercise_id, this.state.routine.routine_id, this.state.reps, this.state.weight)}>
                                    <h2>Add {exercises.name} <img src={AddIcon} alt='Add-icon' className='Btn-Img' /></h2>
                                </Button>
                             )}
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <div className='Step3-App'>
                {/* <div className='Step3-Dash-Header'>
                    <h1 className='Step3-Title'>gymPlan</h1>
                    <button className='Step3-Logout'><a href={process.env.REACT_APP_LOGOUT}>Logout</a></button>
                </div> */}
                <div className='Step3-Body' style={{color: 'black'}}>
                    <div className='Exercise-Detail'>
                        {displayExercises}               
                    </div>     
                    <div className='Guide-Btns'>
                        {/* <Link to={`/Step2/${this.props.match.params.routine_id}/${this.state.exercise.muscle_group}`}><button>{this.state.exercise.muscle_group} : Exercises</button></Link> */}
                        <Link to={`/Step1/${this.props.match.params.routine_id}`}><Button>Muscle Groups</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step3;