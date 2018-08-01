INSERT INTO gymplan_users(
    user_id SERIAL PRIMARY KEY,
    auth_id TEXT,
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

INSERT INTO gymPlan_goals(
    goal_id SERIAL PRIMARY KEY,
    user_id INT,
    content VARCHAR(200), 
    foreign key (user_id) references gymPlan_users (user_id)
);

INSERT INTO gymplan_Routines(
    routine_id SERIAL PRIMARY KEY,
    user_id INT,
    type Text,
    diff TEXT,
    desc VARCHAR(100),
    foreign key (user_id) references gymPlan_users (user_id)
);

INSERT INTO gymplan_days(
    day_id SERIAL PRIMARY KEY,
    uroutine_id INT,
    type VARCHAR(20),
    muscle VARCHAR(10),
    length DECIMAL,
    exercises TEXT[],
    foreign key (routine_id) references gymplan_Routines (routine_id)
);

INSERT INTO gymplan_exercises(
    muscle_group TEXT PRIMARY KEY,
    name VARCHAR(20),
    picture TEXT,
    equip VARCHAR(20),
    desc VARCHAR(150),
);