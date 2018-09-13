SELECT p.id, p.category, p.title, p.description, p.image, p.price, o.quantity, c.total
FROM gymplan_cart c JOIN gymplan_orders o ON c.id = o.cart_id
JOIN gymplan_products p ON p.id = o.product_id 
WHERE o.cart_id = $1
ORDER BY p.id;