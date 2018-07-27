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
}