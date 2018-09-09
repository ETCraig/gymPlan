SELECT p.product_id, p.category, p.description, p.image, p.price, o.quantity, c.total
FROM gymplan_cart c JOIN orders o ON c.car_id = o.cart
JOIN gymplan_products p ON p.product_id = o.product
WHERE o.cart = $1
ORDER BY p.product_id;