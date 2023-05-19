-- SELECT DISTINCT
--     state
-- FROM
--     store.customers;

-- task


-- Return all the products
-- name
-- unit price
-- new price (unit price * 1,1)

USE store;
SELECT 
	  name AS user_name, 
    unit_price AS 'unit price',
    unit_price * 1.1 AS 'new price'
FROM products;