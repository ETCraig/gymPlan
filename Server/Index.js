require('dotenv').config();
const express = require('express');
const app = express();
app.use( express.static( `${__dirname}/../build` ) );
const axios = require('axios');
const bodyParser = require('body-parser');
const massive = require('massive');
const nodemailer = require('nodemailer');
const session = require('express-session');
const router = express.Router();

const {SERVER_PORT, GOALS, REACT_APP_CLIENT_ID, CLIENT_SECRET, REACT_APP_DOMAIN, CONNECTION_STRING, SESSION_SECRET, USER, PASS} = process.env;

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
        res.redirect(GOALS);
    } else {
        console.log('newUser');
        // let pic = picture;
        db.Create_User([sub, pic, first, last]).then(createdUser => {
            req.session.user = createdUser[0];
            res.redirect(GOALS);
        });
    }
});

var transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: USER,
        pass: PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});



const ctrl = require('./Controller');
const checkLoggedIn = require('./Middleware')

app.get('/api/checkLoggedIn', checkLoggedIn);
app.get('/api/getUserInfo', ctrl.getUserInfo);
// Stats
app.patch('/api/updateUserStats', ctrl.updateUserStats);
// Account
app.patch('/api/updateUserAccount', ctrl.updateUserAccount);
app.delete('/api/deleteUserAccount', ctrl.deleteUserAccount);
// Goals
app.get('/api/getUserGoals', ctrl.getUserGoals);
app.post('/api/createUserGoal', ctrl.createUserGoal);
app.delete('/api/deleteUserGoal/:goal_id', ctrl.deleteUserGoal);
app.patch('/api/editUserGoal', ctrl.editUserGoal);
// Routines
app.get('/api/getUserRoutines', ctrl.getUserRoutines);
app.post('/api/createUserRoutine', ctrl.createUserRoutine);
//Exercises
app.get('/api/getUserRoutine/:routine_id', ctrl.getUserRoutine);
//Routine
app.delete('/api/deleteUserRoutine/:routine_id', ctrl.deleteUserRoutine);
app.get('/api/getRoutineExercises/:routine_id', ctrl.getRoutineExercises);
//Step1
app.get('/api/getExercises', ctrl.getExercises);
//Step2
app.get('/api/getExercise/:muscle_group', ctrl.getExercise);
//Step3
app.get('/api/getUserExercise/:exercise_id/:routine_id', ctrl.getUserExercise);
app.post('/api/addUserExercise', ctrl.addUserExercise);
app.delete('/api/removeUserExercise/:exercise_id/:routine_id', ctrl.removeUserExercise);
//Step4
app.get('/api/getAllExercises', ctrl.getAllExercises);
app.get('/api/getUserSearch/:searchParameter/:searchInput/:routine_id', ctrl.getUserSearch);

app.post('/api/send', (req, res, next) => {
    console.log('Hit /send.')
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    console.log(name, email, message)
    var content = `name: ${name} \n email: ${email} \n message: ${message}`
    console.log('content', content)
    var mail = {
        from: name,
        to: 'ethantcraig@yahoo.com',
        subject: 'New Message from Contact Form',
        text: content
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})

const port = 4315;

app.listen(port, () => {console.log(`Listening and operating on Port ${port}`)});
