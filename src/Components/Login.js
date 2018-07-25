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
            <div className='Login-Content'>
                <h1>gymPlan</h1>
                <button className='Login-Btn' onClick={login}>Login / Register</button>
            </div>
        </div>
    );
}