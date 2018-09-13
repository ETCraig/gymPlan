import React, { Component } from 'react';
import './Step4.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

import { Button, Input } from 'antd';

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
            this.setState({ user: res.data });
        });
    }
    getUserRoutine() {
        axios.get(`/api/getUserRoutine/${this.props.match.params.routine_id}`, console.log('sent', this.props.match.params.routine_id)).then(res => {
            console.log('res', res);
            this.setState({ routine: res.data[0] });
        });
    }
    getAllExercises() {
        axios.get('/api/getAllExercises').then(res => {
            this.setState({ exercises: res.data });
        });
    }
    handleUserSearch() {
        axios.get(`/api/getUserSearch/${this.state.searchParameter}/${this.state.searchInput}/${this.state.routine.routine_id}`).then(res => {
            this.setState({ exercises: res.data });
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
        this.setState({ [prop]: val });
    }
    handleInputChange(prop, val) {
        this.setState({ [prop]: this.handleFormatCase(val) });
    }
    handleFormatCase(str) {
        if (str) {
            return str[0].toUpperCase() + str.slice(1).toLowerCase();
        } else {
            null;
        }
    }
    render() {
        let displayExercises;
        displayExercises = this.state.exercises;
        return (
            <div className='Step4-App'>
                <div className='Step4-Body'>
                <div className='Search-Nav'>
                        <Input type='text' className='Search-Input' onChange={e => this.handleInputChange('searchInput', e.target.value)} value={this.state.searchInput} style={{color: '#181DC9'}} />
                        <select className='Custom-select' id='inlineFormCustomSelect' value={this.state.searchParameter} onChange={e => this.handleChange('searchParameter', e.target.value)} style={{color: '#FF9000'}}>
                            <option defaultValue='...'>...</option>
                            <option value='name'>name</option>
                            <option value='equip'>equipment</option>
                            <option value='muscle_group'>muscle</option>
                        </select>
                        <Button className='Search-Btn' onClick={() => this.handleUserSearch()}>Search</Button>
                        <Button className='Reset-Btn' onClick={this.reset}>Reset</Button>
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
                        {displayExercises.map((exercise, i) => {
                            return (
                                <Link to={`/Step3/${this.state.routine.routine_id}/${exercise.exercise_id}`}><img src={exercise.picture} alt={exercise.name} key={i} className='Search-Image' /></Link>
                                    // <h2>{exercise.muscle_group}</h2>
                                    // <h2>{exercise.equip}</h2>
                            )
                        })}
                    </Coverflow>
                </StyleRoot>
                </div>
            </div>
        );
    }
}

export default Step4;