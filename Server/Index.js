require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');

const {SERVER_PORT, REACT_APP_CLIENT_ID, CLIENT_SECRET, REACT_APP_DOMAIN, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.get('/auth/callback', async (req, res) => {
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    };
    console.log('Passes authCallback');
    let responseWithToken = await axios.post(`https://${process.env.REACT_APP_DOMAIN}/oauth/token`, payload);
    console.log('Passed Token');
    let userData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${responseWithToken.data.access_token}`);
    console.log('Passed userData')
    // let picture = 'https://i.pinimg.com/originals/b8/c1/11/b8c111d3ca1e4b4501bb5df7a2db7193.jpg';

    const db = req.app.get('db');
    console.log('Achieved db');
    let {sub, pic, first, last} = userData.data;
    console.log('Achieved userData');
    let userExists = await db.Get_User([userData.data.sub]);
    console.log('userExists');
    if(userExists[0]) {
        req.session.user = userExists[0];
        res.redirect('http://localhost:3000/#/Goals');
    } else {
        console.log('newUser');
        // let pic = picture;
        db.Create_User([sub, pic, first, last]).then(createdUser => {
            req.session.user = createdUser[0];
            res.redirect('http://localhost:3000/#/Goals');
        });
    }
});


const ctrl = require('./Controller');
const checkLoggedIn = require('./Middleware')

app.get('/api/checkLoggedIn', checkLoggedIn);
app.get('/api/getUserInfo', ctrl.getUserInfo);

const port = 4315;

app.listen(port, () => {console.log(`Listening and operating on Port ${port}`)});
