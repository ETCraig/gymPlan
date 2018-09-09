import React, { Component } from 'react';
import './Styles/Contact.css';

import axios from 'axios';
import EmailIcon from '../Assets/icons8-new-post-80.png';
import SendIcon from '../Assets/icons8-send-email-16.png';
import TwitterIcon from '../Assets/icons8-twitter-30.png';
import FacebookIcon from '../Assets/icons8-facebook-30.png';
import InstagramIcon from '../Assets/icons8-instagram-30.png';

import { Input, Button, Form } from 'antd';

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
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
        axios.get('/api/getUserInfo').then(res => this.setState({ user: res.data }));
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('Hit front.')
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log(name, email, message)
        axios({
            method: "POST",
            url: process.env.REACT_APP_SEND,
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            console.log('Passed Axios')
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        document.getElementById('contact-form').reset();
    }
    render() {
        return (
            <div className='Contact-App'>
                <div className='Contact-Body'>
                <img src={require('../Assets/Contact-Bkg.jpg')} alt='BMI Picture' className='Contact-Bkg-Picture' />
                    <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <br />
                            <Input size="large" type="text" className="form-control" id="name" placeholder='Your Name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <br />
                            <Input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Your Email' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <br />
                            <textarea className="form-control" rows="5" id="message" placeholder='Message'></textarea>
                        </div>
                        <Button type="submit" className="btn btn-primary">Submit <img src={SendIcon} alt='Send-Icon' /></Button>
                    </Form>
                    <div className='Social-Media'>
                        <h2>Follow us at </h2>
                        <img src={TwitterIcon} alt='Twitter-Icon' />
                        <img src={FacebookIcon} alt='Facebook-Icon' />
                        <img src={InstagramIcon} alt='Instagram-Icon' />
                    </div>
                </div>
            </div>
        );
    }
}