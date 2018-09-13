INSERT INTO gymplan_routines
(user_id, day, name, type, muscle, diff, description)
VALUES
($1, $2, $3, $4, $5, $6, $7) returning *;
-- INSERT INTO gymplan_routines SET name = $1, day = $2, type = $3, muscle = $4, diff = $5, description = $6 WHERE routine_id = $7 AND user_id = $8;