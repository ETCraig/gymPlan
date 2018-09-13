import React from 'react';
import './Login.css';
import GymLogo from '../../Assets/icons8-barbell-64.png';

import { Button } from 'antd';

import RoutineIcon from '../../Assets/icons8-edit-property-80.png';
import DataIcon from '../../Assets/icons8-combo-chart-80.png';
import ExIcon from '../../Assets/icons8-weightlifting-80.png';

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
            {/* <div className='Login-Intro'>
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
                </div> */}
        </div>
    );
}