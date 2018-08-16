INSERT INTO gymplan_goals 
(user_id, content)
VALUES
($1, $2) returning *;