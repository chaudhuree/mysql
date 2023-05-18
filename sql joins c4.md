<b>overview of the four main types of SQL joins (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN) using a hypothetical database. Suppose we have two tables: `Users` and `Orders`.</b>

The `Users` table:

```sql
CREATE TABLE Users(
   UserID int,
   UserName varchar(255),
   UserEmail varchar(255),
   PRIMARY KEY (UserID)
);

INSERT INTO Users(UserID, UserName, UserEmail)
VALUES
   (1, 'Alice', 'alice@email.com'),
   (2, 'Bob', 'bob@email.com'),
   (3, 'Charlie', 'charlie@email.com'),
   (4, 'David', 'david@email.com');

```

And the `Orders` table:

```sql
CREATE TABLE Orders(
   OrderID int,
   UserID int,
   ProductName varchar(255),
   PRIMARY KEY (OrderID)
);

INSERT INTO Orders(OrderID, UserID, ProductName)
VALUES
   (1, 1, 'Computer'),
   (2, 1, 'Mouse'),
   (3, 2, 'Keyboard'),
   (4, 5, 'Monitor');

```

Note: UserID 5 doesn't exist in Users table, and User 3 and 4 don't have any orders in the Orders table.

1. **INNER JOIN**: This will return the rows where there is a match in both tables.

```SQL
SELECT Users.UserName, Orders.ProductName
FROM Users
INNER JOIN Orders ON Users.UserID = Orders.UserID;

```

1. **LEFT JOIN** (or LEFT OUTER JOIN): This will return all the rows from the left table, and the matched rows from the right table. If no match, the result is NULL on the right side.

```SQL
SELECT Users.UserName, Orders.ProductName
FROM Users
LEFT JOIN Orders ON Users.UserID = Orders.UserID;

```

1. **RIGHT JOIN** (or RIGHT OUTER JOIN): This will return all the rows from the right table, and the matched rows from the left table. If no match, the result is NULL on the left side.

```SQL
SELECT Users.UserName, Orders.ProductName
FROM Users
RIGHT JOIN Orders ON Users.UserID = Orders.UserID;

```

1. **FULL JOIN** (or FULL OUTER JOIN): This will return all rows when there is a match in one of the tables.

```SQL
SELECT Users.UserName, Orders.ProductName
FROM Users
FULL JOIN Orders ON Users.UserID = Orders.UserID;

```

Note: Not all database systems support `FULL JOIN`. For example, MySQL does not support it but you can achieve similar results by combining a `LEFT JOIN` and a `RIGHT JOIN`.
Please replace table names and field names as per your database design.

---
