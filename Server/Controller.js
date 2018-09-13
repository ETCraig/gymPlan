const stripe = require('stripe')(process.env.SECRET_KEY);

module.exports = {
    getUserInfo: (req, res) => {
        console.log('Hit getUser Back')
        const db = req.app.get('db');
        const userid = req.session.user.user_id;

        db.Get_User_Info([userid]).then(data => {
            res.status(200).send(data[0]);
        }).catch((err) => {
            console.log(err)
            res.status(500).send()});
    },
    updateUserStats: (req, res) => {
        console.log('Hit updateStats Back')
        const db = req.app.get('db')
        const userid = req.session.user.user_id;
        console.log('Achieved UserId')
        db.Update_Stats([
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
            req.body.row,
            userid
        ]).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            console.log(err)
            res.status(500).send()
        });
    },
    updateUserAccount: (req, res) => {
        console.log('Hit updateAccount Back')
        const db = req.app.get('db')
        const userid = req.session.user.user_id;
        db.Update_Account([ 
            req.body.first_name, 
            req.body.last_name, 
            req.body.profile_picture, 
            req.body.gender,
            userid
        ]).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            console.log(err)
            res.status(500).send()
        });
    },
    deleteUserAccount: (req, res) => {
        console.log('Hit deleteUserAccount Back')
        const db = req.app.get('db');
        const userid = req.session.user.user_id;
        db.Delete_Account([userid]).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            console.log(err)
            res.status(500).send(err);
        });
    },
    getUserGoals: (req, res) => {
        console.log('Hit getUserGoals')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Get_Goals(req.session.user.user_id).then(data => {
            console.log('Passes DB Inplement.', data)
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        });
    },
    createUserGoal: (req, res) => {
        console.log('Hit createUserGoal Back.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Create_Goal(
            req.session.user.user_id,
            req.body.content
        ).then(data => {
            console.log('Passes DB Inplement 1.')
            db.Get_Goals(req.session.user.user_id).then(data => {
                console.log('Passes DB Inplement 2.')
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send(err);
            });
        });
    },
    deleteUserGoal: (req, res) => {
        console.log('Hit deleteUserGoal Back.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Delete_Goal(req.params.goal_id).then(data => {
            console.log('Passes DB Inplement 1.')
            db.Get_Goals(req.session.user.user_id).then(data => {
                console.log('Passes DB Inplement 2.')
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send(err);
            });
        });
    },
    editUserGoal: (req, res) => {
        console.log('Hit editUserGoal.')
        const db = req.app.get('db');
        const goalid = req.params.goal_id;
        const userid = req.session.user.user_id;
        db.Update_Goal([
            goalid, 
            userid, 
            req.body.content
        ]).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        });
    },
    getUserRoutines: (req, res) => {
        console.log('Hit getUserRoutines Back.')
        const db = req.app.get('db')
        console.log('Passed DB.')
        db.Get_Routines(req.session.user.user_id).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(200).send(err);
        });
    },
    createUserRoutine: (req, res) => {
        console.log('Hit createUserRoutine Back')
        const db = req.app.get('db')
        console.log('Passed DB.')
        db.Create_Routine(
            req.session.user.user_id,
            req.body.day,
            req.body.name,
            req.body.type,
            req.body.muscle,
            req.body.diff,
            req.body.description
        ).then(data => {
            console.log('Passes DB Inplement 1.')
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        });
    },
    getUserRoutine: (req, res) => {
        console.log('Hit getUserRoutine Back.')
        const db = req.app.get('db')
        console.log('Passed DB', req.params.routine_id)
        db.Get_Routine(req.params.routine_id).then(data => {
            console.log('data', data)
            res.status(200).send(data);
        }).catch(err => {
            console.log(err)
            res.status(500).send(err);
        });
    },
    deleteUserRoutine: (req, res) => {
        console.log('Hit deleteUserRoutine Hit.')
        const db = req.app.get('db');
        console.log('Passed DB')
        db.Delete_Routine(req.params.routine_id).then(data => {
            console.log(data);
            res.status(200).send(data);
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    },
    getRoutineExercises: (req, res) => {
        console.log('Hit getRoutineExercises Back.')
        const db = req.app.get('db')
        console.log('Passed DB')
        db.Get_Routine_Exercises(req.params.routine_id).then(data => {
            console.log('RE', data)
            res.status(200).send(data);
        }).catch(err => {
            console.log('err', err)
            res.status(500).send(err);
        });
    },
    getExercises: (req, res) => {
        console.log('Hit getExercises Back.')
        const db = req.app.get('db')
        console.log('Passed DB')
        db.Get_Exercises().then(data => {
            console.log('Exercises', data)
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        });
    },
    getExercise: (req, res) => {
        console.log('HIt getExercise Back.')
        const db = req.app.get('db')
        console.log('Passed DB')
        db.Get_Exercise(req.params.muscle_group).then(data => {
            console.log('Exercise', data)
            res.status(200).send(data);
        }).catch(err => {
            console.log('err', err)
            res.status(500).send(err);
        });
    },
    getUserExercise: (req, res) => {
        console.log('Hit getUserExercise Back.')
        const db = req.app.get('db')
        const exercise_id = req.params.exercise_id;
        const routine_id = req.params.routine_id
        console.log('Passed DB')
        db.Get_User_Exercise(exercise_id).then(data => {
            db.Filter_Exercises(routine_id).then(rt => {
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < rt.length; j++) {
                        if (data[i].exercise_id === rt[j].exercise_id) {
                            data[i].is_in_routine = true;
                        }
                    }
                }
                res.status(200).send(data);
            });
        }).catch(err => {
            console.log('err', err)
            res.status(500).send(err);
        });   
    },
    addUserExercise: (req, res) => {
        console.log('Hit addUserExercise Back.')
        const db = req.app.get('db')
        let {exercise_id, routine_id, reps, weight} = req.body;
        console.log('Passed DB', reps, weight)
        db.Add_User_Exercise(exercise_id, routine_id, reps, weight).then(data => {
            console.log('data', data)
            res.status(200).send(data);
        }).catch(err => {
            console.log('err', err)
            res.status(500).send(err);
        });
    },
    removeUserExercise: (req, res) => {
        console.log('Hit removeUserExercise Back.')
        const db = req.app.get('db')
        const {exercise_id, routine_id} = req.params;
        console.log('Passed DB')
        console.log(exercise_id, routine_id)
        db.Remove_User_Exercise(exercise_id, routine_id).then(data => {
            console.log('data', data)
            res.status(200).send(data);
        }).catch(err => {
            console.log('err', err)
            res.status(500).send(err);
        });
    },
    getAllExercises: (req, res) => {
        console.log('Hit createRoutineExercises Back.')
        const db = req.app.get('db')
        console.log('Passed DB')
        db.Get_All_Exercises().then(data => {
            res.status(200).send(data);
        }).catch(err => {
            console.log('err', err)
            res.status(500).send(err);
        }); 
    },
    getUserSearch: (req, res) => {
        console.log('Hit getUserSearch Back.')
        const db = req.app.get('db')
        let id = req.params.routine_id;
        console.log('Passed DB', id, req.params.searchParameter, req.params.searchInput);
        db.Get_User_Search(id).then(data => {
            let filtered_exercises = data.filter(e => {
                return e[req.params.searchParameter] === req.params.searchInput;
            });
            res.status(200).send(filtered_exercises);
        }).catch(err => {
            console.log('err', err)
            res.status(500).send(err);
        });
    },
    getProducts: (req, res) => {
        console.log('Hit getProducts Back.')
        const db = req.app.get('db');
        db.Get_Products().then(products => {
            console.log(products)
            db.Get_Cart_Id(req.session.user.user_id).then(cart => {
                if(cart[0]){
                    req.session.user.cart_id = cart[0].id
                    res.status(200).send({cart, products})
                }else{
                    db.Create_Cart(req.session.user.user_id).then(cart => { 
                        req.session.user.cart_id = cart[0].id
                        res.status(200).send({cart, products})})
                    }});
            }).catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            });
    },
    addToCart: (req, res) => {
        const db = req.app.get('db');
        db.Add_To_Cart([req.session.user.cart_id, req.body.id, req.body.quantity]).then(() => 
            res.sendStatus(200)).catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            });
    },
    displayAll: (req, res) => {
        const db = req.app.get('db');
        db.Join_All([req.session.user.cart_id]).then(all => {
            res.status(200).send(all)}).catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err)
            });
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.Delete_Product([id, req.session.user.cart_id]).then(() => {
            db.Join_All([req.session.user.cart_id]).then(product => 
                res.status(200).send(product))
            }).catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err);
            });
    },
    quantity: (req, res) => {
        const db = req.app.get('db');
        db.quantity([req.body.quantity, req.body.id, req.session.user.cart_id]).then(() => {
            db.join_all([req.session.user.cart_id]).then(product => 
                res.status(200).send(product))
        }).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong!"})
            console.log(err);
        });
    },   
    makePayment: (req, res) => {
        const amountArray = req.body.amount.toString().split('');
        const pennies = [];
        for(var i = 0; i < amountArray.length; i++){
            if(amountArray[i] === "."){
                if(typeof amountArray[i + 1] === "string"){
                    pennies.push(amountArray[i +1]);
                }else{
                    pennies.push("0")
                }
                if(typeof amountArray[i + 2]=== "string"){
                    pennies.push(amountArray[i + 2]);
                }else{
                    pennies.push("0")
                }
                break;
            }else{
                pennies.push(amountArray[i])
            }
        }
        const convertedAmt = parseInt(pennies.join(''));
        const charge = stripe.charges.create({
            amount: convertedAmt,
            currency: 'usd',
            source: req.body.token.id,
            description: 'Test Charge'
        }, function(err,charge){
            if(err) return res.sendStatus(500)
            return res.sendStatus(200)
        });
    },
    clearCart: (req, res) => {
        const db = req.app.get('db');
        db.Clear_Cart([req.session.user.user_id, req.session.user.cart_id]).then(() => {
            db.Create_Cart(req.session.user.user_id).then(cart => {
                req.session.user.cart_id = cart[0].id;
                res.status(200).send({cart})});
            }).catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"});
                console.log(err);
            });
    }
}