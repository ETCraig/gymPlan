INSERT INTO gymplan_routines
(user_id, day, name, type, muscle, diff, description)
VALUES
($1, $2, $3, $4, $5, $6, $7) returning *;