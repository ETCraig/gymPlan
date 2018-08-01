import React, {Component} from 'react';
import './Styles/Account.css';

import axios from 'axios';
import Dashboard from './Dashboard';

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
            this.setState({user: res.data});
        });
    }
    handleAccountChange() {
        if(window.confirm('Update Account?')) {
            let newInfo = {
                "first_name": this.state.first_name ? this.state.first_name : this.state.user.first_name,
                "last_name": this.state.last_name ? this.state.last_name : this.state.user.last_name,
                "profile_picture": this.state.profile_picture ? this.state.profile_picture : this.state.user.profile_picture,
                "gender": this.state.gender ? this.state.gender : this.state.user.gender,
            };
            console.log(newInfo);
            axios.put('/api/updateUserAccount', newInfo).then(res => {
                this.setState({user: res.data});
            });
        }
        axios.get('/api/getUserInfo').then(res => {
            this.setState({user: res.data});
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
        if(this.state.bool === false) {
            return(
                <div className='Edit'>
                    <button onClick={() => this.setState({bool: true})}>UPDATE</button>
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
                    <input type='text' value={this.state.user.profile_picture} readOnly placeholder='You!' />
                    <br />
                    <span>Gender</span>
                    <br />
                    <select id='inlineFormCustomSelect' value={this.state.user.gender} readOnly>
                    <option>{this.state.user.gender}</option>
                    </select> 
                </div>
            );
        }
        else if(this.state.bool === true) {
            return(
                <div className='Edit'>
                    <button onClick={() => this.setState({bool: false, first_name: '', last_name: '', profile_picture: '', gender: ''})}>Cancel</button>
                    <span>First Name</span>
                    <br />
                    <input onChange={(e) => this.setState({first_name: e.target.value})} />
                    <br />
                    <span>Last Name</span>
                    <br />
                    <input onChange={(e) => this.setState({last_name: e.target.value})} />
                    <br />
                    <span>Profile Picture</span>
                    <br />
                    <input onChange={(e) => this.setState({profile_picture: e.target.value})} />
                    <br />
                    <span>Gender</span>
                    <br />
                    <select id='inlineFormCustomSelect' onChange={(e) => this.setState({gender: e.target.value})}>
                        <option value='Female'>Female</option>
                        <option value='Male'>Male</option>
                    </select>
                    <button onClick={() => this.handleAccountChange()} className='Save'>Save</button>
                </div>
            );
        }
    }
    handleAccountDelete(user_id) {
        axios.delete('/api/deleteUserAccount').then(res => {
            this.props.history.push('/');
        })
    }
    render() {
        return(
            <div className='Account-App'>
                <Dashboard />
                <div className='Account-Body'>
                    <h1>Account Component</h1>
                    {this.handleFeilds()}
                    <br />
                    <button onClick={(e) => this.handleAccountDelete(e.target.value)}>Delete Account</button>
                </div>
            </div>
        );
    }
}

export default Account;