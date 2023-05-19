SELECT *
FROM store.customers
WHERE state = 'VA' OR state = 'GA' OR state = 'FL';

SELECT *
FROM store.customers
WHERE state IN ('VA', 'GA', 'FL');

SELECT *
FROM store.customers
WHERE state NOT IN ('VA', 'GA', 'FL');

-- exercise


-- Return products with
-- quantity in stock equal to 49, 38, 72

SELECT *
FROM store.products
WHERE quantity_in_stock IN (49, 38, 72);