module.exports = {
    getUserInfo: (req, res) => {
        console.log('Hit getUser Back')
        let db = req.app.get('db');
        let userid = req.session.user.user_id;

        db.Get_User_Info([userid]).then(data => {
            res.status(200).send(data[0]);
        }).catch((err) => {
            console.log(err)
            res.status(500).send()});
    },
    updateUserStats: (req, res) => {
        console.log('Hit updateStats Back')
        let db = req.app.get('db')
        let userid = req.session.user.user_id;
        let authid = req.session.user.auth_id;
        console.log('Achieved UserId')
        db.Update_Stats([
            userid, 
            authid, 
            req.body.heigh_t, 
            req.body.weight, 
            req.body.bmi, 
            req.body.body_fat, 
            req.body.neck, 
            req.body.shoulders, 
            req.body.arms, 
            req.body.chest, 
            req.body.waist, 
            req.body.thighs, 
            req.body.calves, 
            req.body.bench, 
            req.body.squat, 
            req.body.d_lift, 
            req.body.row
        ]).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            console.log(err)
            res.status(500).send()
        });
    },
    updateUserAccount: (req, res) => {
        console.log('Hit updateAccount Back')
        let db = req.app.get('db')
        let userid = req.session.user.user_id;
        let authid = req.session.user.auth_id;
        db.Update_Account([userid, authid, req.body.first_name, req.body.last_name, req.body.profile_picture, req.body.gender]).then(res => {
            res.status(200).send(data);
        }).catch(err => {
            console.log(err)
            res.status(500).send()
        });
    },
    deleteUserAccount: (req, res) => {
        console.log('Hit deleteUserAccount Back')
        let db = req.app.get('db');
        let userid = req.session.user.user_id;
        console.log('Hitting DB')
        db.Delete_Account([userid]).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            console.log(err)
            res.status(500).send(err);
        });
    }
}