INSERT INTO gymPlan_users(
    auth_id SERIAL PRIMARY KEY,
    user_id TEXT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    profile_picture TEXT,
    gender VARCHAR(20),
    heigh_t DECIMAL,
    weight DECIMAL,
    bmi DECIMAL,
    body_fat DECIMAL,
    neck DECIMAL,
    shoulders DECIMAL,
    arms DECIMAL,
    Chest DECIMAL,
    waist DECIMAL,
    thighs DECIMAL,
    calves DECIMAL,
    bench DECIMAL,
    squat DECIMAL,
    d_lift DECIMAL,
    row DECIMAL
);

-- INSERT INTO gymPlan_goals(
--     authid INT,
--     goal_id SERIAL PRIMARY KEY,
--     desc VARCHAR(50), 
--     foreign key (authid) references gymPlan_users (auth_id)
-- );

-- INSERT INTO gymPlan_Routines(
--     authid INT,
--     routine_id SERIAL PRIMARY KEY,
--     foreign key (authid) refereces gymPlan_users (auth_id)
-- );



