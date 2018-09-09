import React, { Component } from 'react';
import './Styles/Account.css';

import axios from 'axios';
import AccountIcon from '../Assets/icons8-customer-80.png';

import { Button, Input, Radio } from 'antd';
import RadioGroup from 'antd/lib/radio/group';

class Account extends Component {
    constructor() {
        super();

        this.state = {
            user: [],
            bool: false,
            first_name: '',
            last_name: '',
            profile_picture: '',
            gender: ''
        }
        this.handleFeilds = this.handleFeilds.bind(this);
        this.handleAccountChange = this.handleAccountChange.bind(this);
        this.handleAccountDelete = this.handleAccountDelete.bind(this);
    }

    componentDidMount() {
        axios.get('/api/checkLoggedIn').then().catch(res => {
            console.log('error');
            this.props.history.push('/');
        });
        this.getUserInfo();
    }
    getUserInfo() {
        axios.get('/api/getUserInfo').then(res => {
            this.setState({ user: res.data });
        });
    }
    handleAccountChange() {
        if (window.confirm('Update Account?')) {
            let newInfo = {
                "first_name": this.state.first_name ? this.state.first_name : this.state.user.first_name,
                "last_name": this.state.last_name ? this.state.last_name : this.state.user.last_name,
                "profile_picture": this.state.profile_picture ? this.state.profile_picture : this.state.user.profile_picture,
                "gender": this.state.gender ? this.state.gender : this.state.user.gender,
            };
            console.log(newInfo);
            axios.patch('/api/updateUserAccount', newInfo).then(res => {
                this.setState({ user: res.data });
            });
        }
        axios.get('/api/getUserInfo').then(res => {
            this.setState({ user: res.data });
        });
        console.log('Getting Info Again');
        this.setState({
            bool: false,
            first_name: '',
            last_name: '',
            profile_picture: '',
            gender: ''
        });
    }
    handleFeilds() {
        if (this.state.bool === false) {
            return (
                <div className='Account-Edit'>
                    <Button onClick={() => this.setState({ bool: true })}>UPDATE</Button>
                    <span>First Name</span>
                    <br />
                    <input type='text' value={this.state.user.first_name} readOnly placeholder='Your Name' />
                    <br />
                    <span>Family Name</span>
                    <br />
                    <input type='text' value={this.state.user.last_name} readOnly placeholder='Family Name' />
                    <br />
                    <span>Profile Picture</span>
                    <br />
                    <Input type='text' value={this.state.user.profile_picture} readOnly placeholder='You!' />
                    <br />
                    {/* <img src={this.state.profile_picture} alt='Profile Pic' /> */}
                    <br />
                    <div className='Gender'><span>Gender</span>
                        <h2 value={this.state.user.gender}>{this.state.user.gender}</h2>
                    </div>
                </div>
            );
        }
        else if (this.state.bool === true) {
            return (
                <div className='Account-Edit'>
                    <Button onClick={() => this.setState({ bool: false, first_name: '', last_name: '', profile_picture: '', gender: '' })}>Cancel</Button>
                    <span>First Name</span>
                    <br />
                    <input onChange={(e) => this.setState({ first_name: e.target.value })} />
                    <br />
                    <span>Last Name</span>
                    <br />
                    <input onChange={(e) => this.setState({ last_name: e.target.value })} />
                    <br />
                    <span>Profile Picture</span>
                    <br />
                    <Input onChange={(e) => this.setState({ profile_picture: e.target.value })} />
                    <br />
                    {/* <img src={this.state.profile_picture} alt='Profile Pic' /> */}
                    <br />
                    <span>Gender</span>
                    <br />
                    <div className='Gender'>
                        <RadioGroup onChange={(e) => this.setState({ gender: e.target.value })}>
                            <Radio value='Female'>Female</Radio>
                            <Radio value='Male'>Male</Radio>
                        </RadioGroup>
                    </div>
                    {/* <br /> */}
                    <button onClick={() => this.handleAccountChange()} className='Save'>Save</button>
                </div>
            );
        }
    }
    handleAccountDelete(user_id) {
        axios.delete('/api/deleteUserAccount').then(res => {
            this.props.history.push('/');
        });
    }
    render() {
        return (
            <div className='Account-App'>
            <div className='Account-Body'>
            <img src={require('../Assets/Account-Bkg.jpg')} alt='BMI Picture' className='Account-Bkg-Picture' />
                <div className='Account-Dash-App'>
                    <div className='Account-Dash-Profile'>
                        <div className='Account-Profile-Img-Content'>
                            <img src={this.state.user.profile_picture} alt='Profile' className='Account-Profile-Img' />
                        </div>
                        <div className='Account-Profile-Info-Content'>
                            <span className='Account-Profile-Name'>{this.state.user.first_name}</span>
                            <span className='Account-Profile-Name'>{this.state.user.last_name}</span>
                        </div>
                    </div>
                </div>
                    {this.handleFeilds()}
                    <br />
                    <br />
                    <Button onClick={(e) => this.handleAccountDelete(e.target.value)} className='Delete-Btn' type="danger">Delete Account</Button>
                </div>
            </div>
        );
    }
}

export default Account;