SELECT exercise_id from routine_exercises WHERE routine_id = $1;

SELECT * FROM gymplan_exercises WHERE exercise_id IN
(SELECT exercise_id FROM routine_exercises WHERE routine_id = $1);