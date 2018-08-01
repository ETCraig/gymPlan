import React, {Component} from 'react';
import './Styles/Stats.css';

import axios from 'axios';
import Dashboard from './Dashboard';

export default class Stats extends Component { 
    constructor() {
        super(); 

        this.state = {
            user: [],
            bool: false,
            heigh_t: '',
            weight: '',
            bmi: '',
            body_fat: '',
            neck: '',
            shoulders: '',
            arms: '',
            chest: '',
            waist: '',
            thighs: '',
            calves: '',
            bench: '',
            squat: '',
            d_lift: '',
            row: ''
        }
        this.handleFields = this.handleFields.bind(this);
        this.handleUpdateStats = this.handleUpdateStats.bind(this);
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then(res => {
            this.setState({user: res.data})
        }).catch(res => {
            console.log('error');
            this.props.history.push('/');
        });
        this.getUserInfo();
    }
    getUserInfo() {
        axios.get('/api/getUserInfo').then(res => {
            this.setState({user: res.data});
        });
    }
    handleUpdateStats() {
        if(window.confirm('Update Stats?')) {
            let newStats = {
                "heigh_t": this.state.heigh_t ? this.state.heigh_t : this.state.user.heigh_t,
                "weight": this.state.weight ? this.state.weight : this.state.user.weight,
                "bmi": this.state.bmi ? this.state.bmi : this.state.user.bmi,
                "body_fat": this.state.body_fat ? this.state.body_fat : this.state.user.body_fat,
                "neck": this.state.neck ? this.state.neck : this.state.user.neck,
                "shoulders": this.state.shoulders ? this.state.shoulders : this.state.user.shoulders,
                "arms": this.state.arms ? this.state.arms : this.state.user.arms,
                "chest": this.state.chest ? this.state.chest : this.state.user.chest,
                "waist": this.state.waist ? this.state.waist : this.state.user.waist,
                "thighs": this.state.thighs ? this.state.thighs : this.state.user.thighs,
                "calves": this.state.calves ? this.state.calves : this.state.user.calves,
                "bench": this.state.bench ? this.state.bench : this.state.user.bench,
                "squat": this.state.squat ? this.state.squat : this.state.user.squat,
                "d_lift": this.state.d_lift ? this.state.d_lift : this.state.user.d_lift,
                "row": this.state.row ? this.state.row : this.state.user.row
            };
            console.log(newStats);
            axios.put('/api/updateUserStats', newStats).then(res => {
                this.setState({user: res.data});
            });
        }
        axios.get('/api/getUserInfo').then(res => {
            this.setState({user: res.data});
        });
        console.log('Getting stats again')
        this.setState({
            bool: false,
            heigh_t: '',
            weight: '',
            bmi: '',
            body_fat: '',
            neck: '',
            shoulders: '',
            arms: '',
            chest: '',
            waist: '',
            thighs: '',
            calves: '',
            bench: '',
            squat: '',
            d_lift: '',
            row: ''
        });
    }
    handleFields() {
        if(this.state.bool === false) {
            return(
                <div className='Edit'>
                    <button onClick={() => this.setState({bool: true})}>UPDATE</button>
                    <br />
                    <div className='Edit-Left'>
                    <span>Height</span>
                    <br />
                    <input type = 'text' value={this.state.user.heigh_t} readOnly placeholder='My Height' />
                    <br />
                    <span>Weight</span>
                    <br />
                    <input type='text' value={this.state.user.weight} readOnly placeholder='My Weight' />
                    <br />
                    <span>BMI</span>
                    <br />
                    <input type = 'text' value={this.state.user.bmi} readOnly placeholder='My BMI' />
                    <br />
                    <span>Body Fat</span>
                    <br />
                    <input type = 'text' value={this.state.user.body_fat} readOnly placeholder='My Body Fat' />
                    <br />
                    <span>Neck</span>
                    <br />
                    <input type = 'text' value={this.state.user.neck} readOnly placeholder='My Neck' />
                    <br />
                    <span>Shoulders</span>
                    <br />
                    <input type='text' value={this.state.user.shoulders} readOnly placeholder='My Sgoulders' />
                    <br />
                    <span>Arms</span>
                    <br />
                    <input type='text' value={this.state.user.arms} readOnly placeholder='My Arms' />
                    <br />
                    <span>Chest</span>
                    <br />
                    <input type='text' value={this.state.user.chest} readOnly placeholder='My Chest' />
                    </div>
                    <div className='Edit-Right'>
                    <br />
                    <span>Waist</span>
                    <br />
                    <input type='text' value={this.state.user.waist} readOnly placeholder='My Waist' />
                    <br />
                    <span>Thighs</span>
                    <br />
                    <input type='text' value={this.state.user.thighs} readOnly placeholder='My Thighs' />
                    <br />
                    <span>Calves</span>
                    <br />
                    <input type='text' value={this.state.user.calves} readOnly placeholder='My Calves' />
                    <br />
                    <span>Bench Press</span>
                    <br />
                    <input type='text' value={this.state.user.bench} readOnly placeholder='My Bench' />
                    <br />
                    <span>Squat</span>
                    <br />
                    <input type='text' value={this.state.user.squat} readOnly placeholder='My Squat' />
                    <br />
                    <span>Dead Lift</span>
                    <br />
                    <input type='text' value={this.state.user.d_lift} readOnly placeholder='My Dead Lift' />
                    <br />
                    <span>Row</span>
                    <br />
                    <input type='text' value={this.state.user.row} readOnly placeholder='My Row' />
                    </div>
                </div>
            );
        }
        else if(this.state.bool === true) {
            return (
                <div className='Edit'>
                    <button onClick={() => this.setState({bool: false, heigh_t: '', weight: '', bmi: '', body_fat: '', neck: '', shoulders: '', arms: '', chest: '', waist: '', thighs: '', calves: '', bench: '', squat: '', d_lift: '', row: ''})}>Cancel</button>
                    <div className='Edit-Left'>
                    <span>Height</span>
                    <br />
                    <input onChange={(e) => this.setState({heigh_t: e.target.value})} />
                    <br />
                    <span>Weight</span>
                    <br />
                    <input onChange={(e) => this.setState({weight: e.target.value})} />
                    <br />
                    <span>BMI</span>
                    <br />
                    <input onChange={(e) => this.setState({bmi: e.target.value})} />
                    <br />
                    <span>Body Fat</span>
                    <br />
                    <input onChange={(e) => this.setState({body_fat: e.target.value})} />
                    <br />
                    <span>Neck</span>
                    <br />
                    <input onChange={(e) => this.setState({neck: e.target.value})} />
                    <br />
                    <span>Shoulders</span>
                    <br />
                    <input onChange={(e) => this.setState({shoulders: e.target.value})} />
                    <br />
                    <span>Arms</span>
                    <br />
                    <input onChange={(e) => this.setState({arms: e.target.value})} />
                    <br />
                    <span>Chest</span>
                    <br />
                    <input onChange={(e) => this.setState({chest: e.target.value})} />
                    </div>
                    <div className='Edit-Right'>
                    <br />
                    <span>Waist</span>
                    <br />
                    <input onChange={(e) => this.setState({waist: e.target.value})} />
                    <br />
                    <span>Thighs</span>
                    <br />
                    <input onChange={(e) => this.setState({thighs: e.target.value})} />
                    <br />
                    <span>Calves</span>
                    <br />
                    <input onChange={(e) => this.setState({calves: e.target.value})} />
                    <br />
                    <span>Bench Press</span>
                    <br />
                    <input onChange={(e) => this.setState({bench: e.target.value})} />
                    <br />
                    <span>Squat</span>
                    <br />
                    <input onChange={(e) => this.setState({squat: e.target.value})} />
                    <br />
                    <span>Dead Lift</span>
                    <br />
                    <input onChange={(e) => this.setState({d_lift: e.target.value})} />
                    <br />
                    <span>Row</span>
                    <br />
                    <input onChange={(e) => this.setState({row: e.target.value})} />
                    <br />
                    </div>
                    <button onClick={() => this.handleUpdateStats()} className='Save'>Save</button>
                </div>
            );
        }
    }
    render() {
        return(
            <div className='Stats-App'>
                <Dashboard />
                <div className='Stats-Body'>
                    <h1 className='title'>Body Stats Component</h1>
                    <div className='Stats-Content'>
                        {this.handleFields()}
                    </div>
                </div>
            </div>
        );
    }
}
