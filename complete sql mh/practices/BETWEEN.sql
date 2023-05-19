SELECT *
FROM store.customers
WHERE points >= 1000 AND points <= 3000;

-- easier version of chainig this code is between

SELECT *
FROM store.customers
WHERE points BETWEEN 1000 AND 3000;


-- Return the customers born between 1/1/1990 and 1/1/2000

SELECT *
FROM store.customers
WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01';