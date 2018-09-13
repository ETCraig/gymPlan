DELETE FROM routine_exercises WHERE routine_id = $1;
DELETE FROM gymplan_routines WHERE routine_id = $1;