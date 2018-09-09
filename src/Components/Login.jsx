import React from 'react';
import './Styles/Login.css';
import GymLogo from '../Assets/icons8-barbell-64.png';

import { Button } from 'antd';

import RoutineIcon from '../Assets/icons8-edit-property-80.png';
import DataIcon from '../Assets/icons8-combo-chart-80.png';
import ExIcon from '../Assets/icons8-weightlifting-80.png';

export default function Login() {
    function login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, REACT_APP_CALLBACK_URL } = process.env;
        let redirectUri = encodeURIComponent(`${window.location.origin + REACT_APP_CALLBACK_URL}`);
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    }

    return (
        <div className='Login-App'>
            <ul className="cb-slideshow" style={{ color: 'white', position: 'absolute' }}>
                <li><span>Image 01</span><div><h3>am·bi·tion</h3></div></li>
                <li><span>Image 02</span><div><h3>vi·sion</h3></div></li>
                <li><span>Image 03</span><div><h3>prep·a·ra·tion</h3></div></li>
                <li><span>Image 04</span><div><h3>ex·e·cu·tion</h3></div></li>
                <li><span>Image 05</span><div><h3>ded·i·ca·tion</h3></div></li>
                <li><span>Image 06</span><div><h3>re·flec·tion</h3></div></li>
            </ul>
            <div className='Container'>
                <img src={GymLogo} alt='Gym-Logo' className='Logo' />



                <div className='Intro-Content'>
                    <br />
                    <h2>gymPlan</h2>
                    <br />
                    <p>Start creating your own personal routine!</p>
                </div>
                <br />
                <div className='Btn-Content'>
                    <Button className='Login-Btn' onClick={login} type="primary">Login / Register</Button>
                </div>
            </div>
            <div className='Login-Intro'>
                    <div className='Login-Intro-List'>
                        <img src={RoutineIcon} alt='Routine-Icon' />
                        <h2>Personalized Workout Routines</h2>
                        <p>Create personalized workout programs tailored to your needs to keep you motivated</p>
                    </div>
                    <div className='Login-Intro-List'>
                        <img src={ExIcon} alt='Routine-Icon' />
                        <h2>Hundreds of Exercises</h2>
                        <p>Select the exercises you want and assign them the reps and weight that fits your goals</p>
                    </div>
                    <div className='Login-Intro-List'>
                        <img src={DataIcon} alt='Data-Icon' />
                        <h2>Analyze and Improve</h2>
                        <p>Analyze your workout data and progress to maximize results</p>
                    </div>
                </div>
            {/* <div className='Features-List1'>
                <div className='Create'>
                    <h4>Create your own personalized Routines that fit your goals and lifestyle.</h4>
                </div>
                <br />
                <div className='Exercises'>
                    <h4>Select from an expansive and detailed collection of exercises.</h4>
                </div>
                <br />
                <div className='Routines'>
                    <h4>Store multiple routines for multiple workouts, each varying according to your plan.</h4>
                </div>
            </div>
            <div className='Features-List2'>
                <div className='Goals'>
                    <h4>Here you can store a list of your fitness goals and track, edit, and Complete! </h4>
                </div>
                <br />
                <div className='Stats'>
                    <h4>Fill in your measurements, weight, and more to see the progress you make as you go.</h4>
                </div>
                <br />
                <div className='Delete'>
                    <h4>Once you are done or ready to mix things up, you can edit or delete any routine and start again.</h4>
                </div>
            </div> */}
        </div>
    );
}