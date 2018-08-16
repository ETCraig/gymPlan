SELECT * FROM (
    SELECT * FROM gymplan_routines
    RIGHT JOIN gymplan_exercises ON 
    gymplan_routines.routine_id = gymplan_exercises.exercise_id
    WHERE exercise_id != $1
) AS derivedTable