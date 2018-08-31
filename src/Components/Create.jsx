import React, { Component } from 'react';
import './Styles/Create.css';

import axios from 'axios'

import { Button, Input, Radio, Select } from 'antd';
import RadioGroup from 'antd/lib/radio/group';

class Step1 extends Component {
    constructor() {
        super();

        this.state = {
            newName: '',
            newDay: '',
            newMuscle: '',
            newType: '',
            newDiff: '',
            newDesc: ''
        }
        this.handleNewPropChange = this.handleNewPropChange.bind(this);
        this.handleCreateBtn = this.handleCreateBtn.bind(this);
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then()
        this.getUserInfo();
    }
    getUserInfo() {
        axios.get('/api/getUserInfo').then(res => {
            this.setState({ user: res.data });
        });
    }
    handleCreateBtn() {
        let promise = {
            'name': this.state.newName,
            'day': this.state.newDay,
            'muscle': this.state.newMuscle,
            'type': this.state.newType,
            'diff': this.state.newDiff,
            'description': this.state.newDesc
        };
        axios.post(`/api/createUserRoutine/${this.props.match.params.routine_id}`, promise).then(res => {
            this.props.history.push('/Routines');
        });
    }
    handleNewPropChange(prop, val) {
        this.setState({ [prop]: val });
    }
    render() {
        return (
            <div className='Create-App'>

                <div className='Routines-Create'>
                    <Input onChange={e => this.handleNewPropChange('newName', e.target.value)} value={this.state.newName} className='Routines-Name' type='text' placeholder='Routine Name' />

                    <select onChange={e => this.handleNewPropChange('newDay', e.target.value)} value={this.state.newDay} className='Routines-Day'>
                        <option defaultValue='Day..'>Day..</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday</option>
                        <option value='Thursday'>Thursday</option>
                        <option value='Friday'>Friday</option>
                        <option value='Saturday'>Saturday</option>
                        <option value='Sunday'>Sunday</option>
                    </select>

                    <RadioGroup onChange={e => this.handleNewPropChange('newDiff', e.target.value)} value={this.state.newDiff} className='Routines-Diff'>
                        Difficulty
                    <Radio value='Beginner'>Beginner</Radio>
                        <Radio value='Intermediate'>Intermediate</Radio>
                        <Radio value='Advanced'>Advanced</Radio>
                    </RadioGroup>

                    <select onChange={e => this.handleNewPropChange('newMuscle', e.target.value)} value={this.state.newMuscle} className='Routines-Muscle'>
                        <option defaultValue='Muscle..'>Muscle..</option>
                        <option value='Abs'>Abs</option>
                        <option value='Back'>Back</option>
                        <option value='Biceps'>Biceps</option>
                        <option value='Cardio'>Cardio</option>
                        <option value='Chest'>Chest</option>
                        <option value='Forearms'>Forearms</option>
                        <option value='Glutes'>Glutes</option>
                        <option value='Lower Legs'>Lower Legs</option>
                        <option value='Shoulders'>Shoulders</option>
                        <option value='Triceps'>Triceps</option>
                        <option value='Upper Legs'>Upper Legs</option>
                    </select>

                    <RadioGroup onChange={e => this.handleNewPropChange('newType', e.target.value)} value={this.state.newType} className='Routines-Type'>
                        Type
                    <Radio value='Weight Loss'>Weight Loss</Radio>
                        <Radio value='Muscle Toning'>Muscle Toning</Radio>
                        <Radio value='Maintaining'>Maintaining</Radio>
                        <Radio value='Mass Gaining'>Mass Gaining</Radio>
                    </RadioGroup>
                    <Input onChange={e => this.handleNewPropChange('newDesc', e.target.value)} value={this.state.newDesc} className='Routines-Desc' type='text' placeholder='Routine Description' />
                    <br />
                    <Button onClick={this.handleCreateBtn} className='Create-Routine-Btn'>Create Routine</Button>
                </div>
            </div>
        );
    }
}

export default Step1;