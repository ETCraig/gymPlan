import React from 'react';
import './Styles/Login.css';

export default function Login() {
    function login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let redirectUri = encodeURIComponent(`http://localhost:4315/auth/callback`);
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    }
    return(
        <div className='Login-App'>
            <div className='Intro-Content'>
                <h2>'Fitness is not about being better than someone else... it's about being better than you used to be.'</h2>
            </div>
            <br />
            <div className='Btn-Content'>
                <button className='Login-Btn' onClick={login}>Login / Register</button>
            </div>
            <div className='Features-List'>
                <div className='Goals-Box'>
                    
                </div>
                <br />
                <div className='Stats-Box'>

                </div>
                <br />
                <div className='Routines-Box'>

                </div>
            </div>
        </div>
    );
}