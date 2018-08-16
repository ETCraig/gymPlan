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
    foreign key (user_id) references gymplan_users (user_id)
);

INSERT INTO gymplan_routines(
    routine_id SERIAL PRIMARY KEY,
    user_id INT,
    day  VARCHAR(10),
    name VARCHAR(20),
    type VARCHAR(14),
    muscle VARCHAR(10),
    diff VARCHAR(20),
    description VARCHAR(150),
    foreign key (user_id) references gymPlan_users (user_id)
);

INSERT INTO routine-exercises(
    routineExercise_id SERIAL PRIMARY KEY,
    routine_id INT,
    exercise_id INT,
    reps INT,
    weight DECIMAL,
    foreign key (routine_id) references gymplan_Routines (routine_id),
    foreign key (exercise_id) references gymplan_exercises (exercise_id)
);

INSERT INTO gymplan_exercises(
    exercise_id SERIAL PRIMARY KEY,
    muscle_group VARCHAR(10),
    name VARCHAR(30),
    picture TEXT,
    equip VARCHAR(20),
    desc VARCHAR(150),
    defaultReps VARCHAR(4)
);