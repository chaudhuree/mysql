SELECT *
FROM store.customers
WHERE state = 'VA';

SELECT *
FROM store.customers
WHERE state != 'VA';

SELECT *
FROM store.customers
WHERE birth_date > '1990-01-01';

-- Get the orders placed this year orders

SELECT * 
FROM store.orders
WHERE order_date >= '2019-01-01';

SELECT *
FROM store.customers
WHERE birth_date > '1990-01-01' OR points > 1000 AND state = 'VA';

SELECT * 
FROM store.customers
WHERE NOT (birth_date > '1990-01-01' OR points > 1000);

-- transformation of NOT operator with normal operator
SELECT 
    *
FROM
    store.customers
WHERE
    birth_date <= '1990-01-01'
        AND points <= 1000;


-- exercise

-- For the order_items table, get the items
-- for order #6
-- where the total price is greater than 30
USE store;
SELECT *
FROM order_items
WHERE order_id = 6 AND unit_price * quantity > 30;