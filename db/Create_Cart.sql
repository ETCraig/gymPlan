INSERT INTO gymplan_cart
(user_id, active) 
VALUES($1, true) 
returning *;