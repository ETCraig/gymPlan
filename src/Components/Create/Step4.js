import React, {Component} from 'react';
import './Styles/Step4.css';

import axios from 'axios';
import {Link} from 'react-router-dom';

class Step4 extends Component {
    constructor() {
        super();

        this.state = {
            routine: [],
            exercises: []
        }
        this.handleUserSearch = this.handleUserSearch.bind(this);
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then().catch(res => {
            console.log('error');
            this.props.history.push('/');
        });
        this.getUserInfo();
        this.getUserRoutine();
        this.getAllExercises();
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
    getAllExercises() {
        axios.get('/api/getAllExercises').then(res => {
            this.setState({exercises: res.data});
        });
    }
    handleUserSearch() {
        axios.get(`/api/getUserSearch/${this.state.searchParameter}/${this.state.searchInput}/${this.state.routine.routine_id}`).then(res => {
            this.setState({exercises: res.data});
        });
    }
    reset = () => {
        this.setState({
            searchInput: '',
            filteredExercises: [],
            searchParameter: '...Search By',
            currentPage: 1,
            filteredClicked: false
        });
        this.getAllExercises();
    }
    handleChange(prop, val) {
        this.setState({[prop]: val});
    }
    handleInputChange(prop, val) {
        this.setState({[prop]: this.handleFormatCase(val)});
    }
    handleFormatCase(str) {
        if(str) {
            return str[0].toUpperCase() + str.slice(1).toLowerCase();
        } else {
            null;
        }
    }
    render() {
        let displayExercises;
        displayExercises = this.state.exercises;
        return(
            <div className='Step4-App'>
                <div className='Dash-Header'>
                    <h1 className='Title'>gymPlan</h1>
                    <button className='Logout'><a href={process.env.REACT_APP_LOGOUT}>Logout</a></button>
                </div>

                <div className='Step4-Body'>
                    <div>
                        <input type='text' className='Search-Input' onChange={e => this.handleInputChange('searchInput', e.target.value)} value={this.state.searchInput} />
                    </div>
                    <div>
                        <select className='Custom-Select' id='inlineFormCustomSelect' value={this.state.searchParameter} onChange={e => this.handleChange('searchParameter', e.target.value)}>
                            <option defaultValue='...'>...</option>
                            <option value='name'>name</option>
                            <option value='equip'>equipment</option>
                            <option value='muscle_group'>muscle</option>
                        </select>
                    </div>
                    <div>
                        <button className='Search-Btn' onClick={() => this.handleUserSearch()}>Search</button>
                        <button className='Reset-Btn' onClick={this.reset}>Reset</button>
                    </div>
                <div className='All-Exercises'>
                {displayExercises.map((exercise, i) => {
                    return(
                        <div className='Both-Sidez' key={i}>
                            <Link to={`/Step3/${this.state.routine.routine_id}/${exercise.exercise_id}`}><h2>{exercise.name}</h2></Link>
                            <h2>{exercise.muscle_group}</h2>
                            <h2>{exercise.equip}</h2>
                            <img src={exercise.picture} alt='Motion Pic' />
                        </div>
                    )
                })}
                </div>
                </div>
            </div>
        );
    }
}

export default Step4;