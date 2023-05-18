<b>examples and demo data for different types of SQL joins, along with the corresponding code. Let's assume we have two tables: `Customers` and `Orders`.</b>
Customers table:

```diff
+----+----------+
| ID |  Name    |
+----+----------+
| 1  | John     |
| 2  | Sarah    |
| 3  | Michael  |
+----+----------+

```

Orders table:

```diff
+-------+------------+--------+
| OrderID | OrderDate  |  CustomerID |
+-------+------------+--------+
|   1   | 2023-01-01 |     2      |
|   2   | 2023-02-01 |     1      |
|   3   | 2023-03-01 |     3      |
+-------+------------+--------+

```

```sql
SELECT Customers.ID, Customers.Name, Orders.OrderID, Orders.OrderDate
FROM Customers
INNER JOIN Orders ON Customers.ID = Orders.CustomerID;

```

Result:

```diff
+----+----------+---------+------------+
| ID |  Name    | OrderID | OrderDate  |
+----+----------+---------+------------+
| 1  | John     |    2    | 2023-02-01 |
| 2  | Sarah    |    1    | 2023-01-01 |
| 3  | Michael  |    3    | 2023-03-01 |
+----+----------+---------+------------+

```

```sql
SELECT Customers.ID, Customers.Name, Orders.OrderID, Orders.OrderDate
FROM Customers
LEFT JOIN Orders ON Customers.ID = Orders.CustomerID;

```

Result:

```diff
+----+----------+---------+------------+
| ID |  Name    | OrderID | OrderDate  |
+----+----------+---------+------------+
| 1  | John     |    2    | 2023-02-01 |
| 2  | Sarah    |    1    | 2023-01-01 |
| 3  | Michael  |    3    | 2023-03-01 |
+----+----------+---------+------------+

```

```sql
SELECT Customers.ID, Customers.Name, Orders.OrderID, Orders.OrderDate
FROM Customers
RIGHT JOIN Orders ON Customers.ID = Orders.CustomerID;

```

Result:

```diff
+----+----------+---------+------------+
| ID |  Name    | OrderID | OrderDate  |
+----+----------+---------+------------+
| 2  | Sarah    |    1    | 2023-01-01 |
| 1  | John     |    2    | 2023-02-01 |
| 3  | Michael  |    3    | 2023-03-01 |
+----+----------+---------+------------+

```

```sql
SELECT Customers.ID, Customers.Name, Orders.OrderID, Orders.OrderDate
FROM Customers
FULL OUTER JOIN Orders ON Customers.ID = Orders.CustomerID;

```

Result:

```diff
+----+----------+---------+------------+
| ID |  Name    | OrderID | OrderDate  |
+----+----------+---------+------------+
| 1  | John     |    2    | 2023-02-01 |
| 2  | Sarah    |    1    | 2023-01-01 |
| 3  | Michael  |    3    | 2023-03-01 |
+----+----------+---------+------------+

```

These are examples of different types of SQL joins along with demo data and the corresponding code. You can adapt and modify these examples based on your specific table structure and requirements.

---
