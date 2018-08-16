INSERT INTO routine_exercises 
(routine_id, exercise_id, weight, reps)
VALUES
($1, $2, $3, $4) returning *;