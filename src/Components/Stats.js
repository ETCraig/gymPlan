import React, {Component} from 'react';
import './Styles/Stats.css';

import axios from 'axios';
import StatsIcon from '../Assets/icons8-bar-chart-80.png';
import HeightIcon from '../Assets/icons8-height-16.png';
import WeightIcon from '../Assets/icons8-scale-16.png';
import FatIcon from '../Assets/icons8-fat-man-16.png'
import BodyIcon from '../Assets/icons8-standing-man-16.png'
import NeckIcon from '../Assets/icons8-neck-16.png';
import ShouldersIcon from '../Assets/icons8-shoulders-16.png';
import ArmsIcon from '../Assets/icons8-muscle-16.png';
import Chesticon from '../Assets/icons8-chest-16.png';
import WaistIcon from '../Assets/icons8-prelum-16.png';
import LowerIcon from '../Assets/icons8-calves-48.png';
import UpperIcon from '../Assets/icons8-hamstrings-48.png';
import BenchIcon from '../Assets/icons8-bench-press-16.png';
import SquatIcon from '../Assets/icons8-squats-16.png';
import DeadLiftIcon from '../Assets/icons8-deadlift-16.png';
import RowIcon from '../Assets/icons8-workout-16.png';

import {Button} from 'antd';

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
            axios.patch('/api/updateUserStats', newStats).then(res => {
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
                    <Button onClick={() => this.setState({bool: true})}>UPDATE</Button>
                    <br />
                    <div className='Edit-Left'>
                    <span>Height <img src={HeightIcon} alt='Height-Icon' /></span>
                    <br />
                    <input type = 'text' value={this.state.user.heigh_t} readOnly placeholder='My Height' />
                    <br />
                    <span>Weight <img src={WeightIcon} alt='Weight-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.weight} readOnly placeholder='My Weight' />
                    <br />
                    <span>BMI <img src={BodyIcon} alt='Body-Icon' /></span>
                    <br />
                    <input type = 'text' value={this.state.user.bmi} readOnly placeholder='My BMI' />
                    <br />
                    <span>Body Fat <img src={FatIcon} alt='Fat-Icon' /></span>
                    <br />
                    <input type = 'text' value={this.state.user.body_fat} readOnly placeholder='My Body Fat' />
                    <br />
                    <span>Neck <img src={NeckIcon} alt='Neck-Icon' /></span>
                    <br />
                    <input type = 'text' value={this.state.user.neck} readOnly placeholder='My Neck' />
                    <br />
                    <span>Shoulders <img src={ShouldersIcon} alt='Shoulders-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.shoulders} readOnly placeholder='My Sgoulders' />
                    <br />
                    <span>Arms <img src={ArmsIcon} alt='Arms-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.arms} readOnly placeholder='My Arms' />
                    <br />
                    <span>Chest <img src={Chesticon} alt='Chest-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.chest} readOnly placeholder='My Chest' />
                    </div>
                    <div className='Edit-Right'>
                    <br />
                    <span>Waist <img src={WaistIcon} alt='Waist-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.waist} readOnly placeholder='My Waist' />
                    <br />
                    <span>Thighs <img src={UpperIcon} alt='Upper-Icon' className='Upper-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.thighs} readOnly placeholder='My Thighs' />
                    <br />
                    <span>Calves <img src={LowerIcon} alt='Lower-Icon' className='Lower-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.calves} readOnly placeholder='My Calves' />
                    <br />
                    <span>Bench Press <img src={BenchIcon} alt='Bench-Icon' className='Lower-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.bench} readOnly placeholder='My Bench' />
                    <br />
                    <span>Squat <img src={SquatIcon} alt='Squat-Icon' className='Lower-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.squat} readOnly placeholder='My Squat' />
                    <br />
                    <span>Dead Lift <img src={DeadLiftIcon} alt='Dead-Lift-Icon' className='Lower-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.d_lift} readOnly placeholder='My Dead Lift' />
                    <br />
                    <span>Row <img src={RowIcon} alt='Row-Icon' className='Lower-Icon' /></span>
                    <br />
                    <input type='text' value={this.state.user.row} readOnly placeholder='My Row' />
                    </div>
                </div>
            );
        }
        else if(this.state.bool === true) {
            return (
                <div className='Edit'>
                    <Button onClick={() => this.setState({bool: false, heigh_t: '', weight: '', bmi: '', body_fat: '', neck: '', shoulders: '', arms: '', chest: '', waist: '', thighs: '', calves: '', bench: '', squat: '', d_lift: '', row: ''})}>Cancel</Button>
                    <div className='Edit-Left'>
                    <span>Height</span>
                    <br />
                    <input onChange={(e) => this.setState({heigh_t: e.target.value})} placeholder='Inch' />
                    <br />
                    <span>Weight</span>
                    <br />
                    <input onChange={(e) => this.setState({weight: e.target.value})}  placeholder='lbs'/>
                    <br />
                    <span>BMI</span>
                    <br />
                    <input onChange={(e) => this.setState({bmi: e.target.value})} placeholder='Numeric' />
                    <br />
                    <span>Body Fat</span>
                    <br />
                    <input onChange={(e) => this.setState({body_fat: e.target.value})} placeholder='Numeric' />
                    <br />
                    <span>Neck</span>
                    <br />
                    <input onChange={(e) => this.setState({neck: e.target.value})} placeholder='Inch' />
                    <br />
                    <span>Shoulders</span>
                    <br />
                    <input onChange={(e) => this.setState({shoulders: e.target.value})} placeholder='Inch' />
                    <br />
                    <span>Arms</span>
                    <br />
                    <input onChange={(e) => this.setState({arms: e.target.value})} placeholder='Inch' />
                    <br />
                    <span>Chest</span>
                    <br />
                    <input onChange={(e) => this.setState({chest: e.target.value})} placeholder='Inch'/>
                    </div>
                    <div className='Edit-Right'>
                    <br />
                    <span>Waist</span>
                    <br />
                    <input onChange={(e) => this.setState({waist: e.target.value})} placeholder='Inch' />
                    <br />
                    <span>Thighs</span>
                    <br />
                    <input onChange={(e) => this.setState({thighs: e.target.value})} placeholder='Inch' />
                    <br />
                    <span>Calves</span>
                    <br />
                    <input onChange={(e) => this.setState({calves: e.target.value})} placeholder='Inch' />
                    <br />
                    <span>Bench Press</span>
                    <br />
                    <input onChange={(e) => this.setState({bench: e.target.value})} placeholder='lbs'/>
                    <br />
                    <span>Squat</span>
                    <br />
                    <input onChange={(e) => this.setState({squat: e.target.value})} placeholder='lbs'/>
                    <br />
                    <span>Dead Lift</span>
                    <br />
                    <input onChange={(e) => this.setState({d_lift: e.target.value})} placeholder='lbs'/>
                    <br />
                    <span>Row</span>
                    <br />
                    <input onChange={(e) => this.setState({row: e.target.value})} placeholder='lbs' />
                    <br />
                    </div>
                    <Button onClick={() => this.handleUpdateStats()} className='Save'>Save</Button>
                </div>
            );
        }
    }
    render() {
        return(
            <div className='Stats-App'>
                <div className='Stats-Dash-App'>
                {/* <div className='Stats-Dash-Header'>
                    <h1 className='Stats-Title'>gymPlan</h1>
                    <button className='Stats-Logout'><a href={process.env.REACT_APP_LOGOUT}>Logout</a></button>
                </div> */}

                <div className='Stats-Dash-Profile'>
                    <div className='Stats-Profile-Img-Content'>
                        <img src={this.state.user.profile_picture} alt='Stats-Profile' className='Profile-Img' />
                    </div>
                    <div className='Stats-Profile-Info-Content'>
                        <span className='Stats-Profile-Name'>{this.state.user.first_name}</span>
                        <span className='Stats-Profile-Name'>{this.state.user.last_name}</span>
                            <div className='Desc-Content'>
                                <img src={StatsIcon} alt='Goal-Icon' />
                                <h1>Stats</h1>
                                <h2>Keeping track of your body and compound exercises stats helps motivate and inform you. Ensure to make a timely habit of keeping track and updating these numbers.</h2>
                            </div>
                    </div>
                </div>

            </div>

                <div className='Stats-Body' style={{color: 'black'}}>
                    <div className='Stats-Content'>
                        {this.handleFields()}
                    </div>
                </div>
            </div>
        );
    }
}
