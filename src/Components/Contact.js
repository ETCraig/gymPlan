import React, {Component} from 'react';
import './Styles/Contact.css';

import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Contact extends Component {
    constructor() {
        super();

        this.state= {
            user: []
        }
    }
    componentDidMount() {
        axios.get('/api/checkLoggedIn').then().catch(res => {
            console.log('error');
            this.props.history.push('/');
        });
        this.getUserInfo();
    }
    getUserInfo() {
        axios.get('/api/getUserInfo').then(res => this.setState({user: res.data}));
    }
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3000/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        document.getElementById('contact-form').reset();
    }
    render() {
        return(
            <div className='Contact-App'>
                
                <div className='Contact-Dash-App'>
                <div className='Contact-Dash-Header'>
                    <h1 className='Contact-Title'>gymPlan</h1>
                    <button className='Contact-Logout'><a href="http://localhost:3000/auth/logout">Logout</a></button>
                </div>

                <div className='Contact-Dash-Profile'>
                    <div className='Contact-Profile-Img-Content'>
                        <img src={this.state.user.profile_picture} alt='Profile' className='Profile-Img' />
                    </div>
                    <div className='Contact-Profile-Info-Content'>
                        <span className='Contact-Profile-Name'>{this.state.user.first_name}</span>
                        <span className='Contact-Profile-Name'>{this.state.user.last_name}</span>
                    </div>
                </div>

                <div className='Contact-Dash-Navbar'>
                    <ul>
                        <Link to='/Goals'><li>My Goals</li></Link>
                        <Link to='/Stats'><li>Body Stats</li></Link>
                        <Link to='/Routines'><li>My Routines</li></Link>
                        <Link to='/Account'><li>Manage Account</li></Link>
                        <Link to='/Contact-Us'><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>

                <div className='Contact-Body'>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder='Your Name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Your Email'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" id="message" placeholder='Message'></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}