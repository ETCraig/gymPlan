INSERT INTO gymplan_cart
(cart_user, active)
VALUES
($1, true) returning * ;