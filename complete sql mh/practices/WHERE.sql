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