//docs: create database

// CREATE DATABASE college;

// docs: select database/ use database

// USE college;

// docs: delete database

// DROP DATABASE college;

// docs:table with name student

// CREATE TABLE student(
// 	   Roll int,
//     Name varchar(15),
//     Age int(4),
//     Gender varchar(10),
//     GPA double(3,2),
//     City varchar(15),
//     PRIMARY KEY(Roll)
// );

//docs: rename table

// RENAME TABLE student TO student_details ;

//docs: drop table

// DROP TABLE student_details;

//docs: insert data in table

// INSERT INTO student_details VALUES
//   (56, 'sohan', 27, 'male', 4.88, 'panchbibi'),
//   (12, 'mizan', 26, 'male', 5.00, 'joypurhat'),
//   (43, 'hasina', 24, 'female', 3.27, 'dinajpur'),
//   (48, 'kuddus', 26, 'male', 2.08, 'rangput'),
//   (09, 'easha', 27, 'female', 5.00, 'narshingdi'),
//   (22, 'rahim', 24, 'male', 3.58, 'panchbibi');

//docs: select

// SELECT Name,GPA FROM student_details;
// SELECT * FROM student_details;

//docs: limit

// SELECT * FROM student_details LIMIT 5;

//docs: DISTINCT
// SELECT DISTINCT city FROM student_details;

//docs: order by
// SELECT Name,Roll,Age FROM student_details ORDER BY GPA;
// SELECT * FROM student_details ORDER BY GPA DESC;

//docs: where clause
// SELECT * FROM student_details WHERE GPA > 4.00;
// SELECT * FROM student_details WHERE GPA > 4.00 AND Age > 25;
// SELECT * FROM student_details WHERE GPA > 4.00 OR Age > 25;
// SELECT * FROM student_details WHERE GPA BETWEEN 3.00 AND 4.00;
// SELECT * FROM student_details WHERE City='panchbibi';
// SELECT * FROM student_details WHERE Roll IN (12,43,48);
// SELECT * FROM student_details WHERE Roll NOT IN (12,43,48) ;
// SELECT * FROM student_details WHERE Roll = 12;
// SELECT * FROM student_details WHERE Roll != 12;
// SELECT * FROM student_details WHERE Roll>12 AND (Gender="female" OR Age>25);
// SELECT Name From student_details WHERE Name LIKE 's%';

//docs: as
// SELECT Name AS "Student Name", GPA AS Student_GPA FROM student_details;
// for firstone i've used double quotes because there has space in between them

//docs: constraints & auto increment

// a. NOT NULL
// b. UNIQUE
// c. PRIMARY KEY
// d. CHECK
// e. DEFAULT

// fn: constraints
// CREATE TABLE Teacher (
//   ID int NOT NULL AUTO_INCREMENT,
//   Name varchar(15) NOT NULL,
//   Salary int,
//   PRIMARY KEY (ID)
// );

// INSERT INTO Teacher (ID,Name,Salary) VALUES
//   (1000,'sohan', 50000);  //works fine

// INSERT INTO Teacher (Name,Salary) VALUES
//   ('sohan', 50000); //works fine and set id 1001

// INSERT INTO Teacher (Name) VALUES
//   ('sohan'); //works fine and set id 1002 and salary null

// docs: update
// UPDATE student_details SET GPA=4.00 WHERE Roll=12;
// UPDATE Teacher SET Salary=Salary+5000 WHERE ID=1000;

// docs: delete
// DELETE FROM student_details WHERE Roll=12;
// DELETE FROM Teacher WHERE ID=1000;

// docs: Upper & Lower
// SELECT UPPER(Name) AS "Student Name" FROM student_details;

// docs: concat
// SELECT CONCAT(Name, ' is', Age," years old") AS "Student Name" FROM student_details;

// docs: count
// SELECT COUNT(*) AS "Total Student" FROM student_details;

// docs: sum
// SELECT SUM(Salary) AS "Total Salary" FROM Teacher;

// docs: max
// SELECT MAX(Salary) AS "Maximum Salary" FROM Teacher;

// docs: min
// SELECT MIN(Salary) AS "Minimum Salary" FROM Teacher;

// docs: avg
// SELECT AVG(Salary) AS "Average Salary" FROM Teacher;

// docs: truncate
// SELECT TRUNCATE(10.1234562, 3) AS "Truncated Number";

// query testing
// SELECT MIN(GPA) AS "Minimum GPA" FROM student_details WHERE Gender="female";

//docs: ALTEER TABLE
// this is used to add new column in table
// and also used to delete column from table
// aswell as used to modify column name and data type

// add new column in table
// ALTER TABLE student_details ADD Email varchar(30);

// renaming column
// ALTER TABLE student_details CHANGE Email Email_Address varchar(30);

// delete column
// ALTER TABLE student_details DROP COLUMN Email_Address;

// docs: GROUP BY
// this is used to divide rows in a table into smaller groups

//syntax

// SELECT column_name(s)
// FROM table_name
// WHERE condition
// GROUP BY group_by_expression
// ORDER BY column_name(s);

//note: we can use directly select column_name(s) from table_name group by column_name(s);

//note: but if we use where and order then we have to use group by after where and before order by

// SELECT City FROM student_details GROUP BY City;

// if the data table has  column in numeric field, then we can sum the column or avg the column

// SELECT City, SUM(GPA) FROM student_details GROUP BY City ORDER BY City;

//docs: TRUNCATE TABLE
// this is used to delete all rows from table

// TRUNCATE TABLE student_details;

//docs: joining tables

// suppose there are two tables
// 1. student_details
// 2. exam_results

// CREATE TABLE student_details(
//     Roll int NOT NULL AUTO_INCREMENT,
//     Name varchar(15),
//     Age int(4),
//     Gender varchar(10),
//     PRIMARY KEY(Roll)
// );

// insert data in student_details table

// INSERT INTO student_details (Roll, Name, Age, Gender)
// VALUES
//(101,'Rahim',15,'Male');

//first run this command then run the next command as roll is auto incremented so no need to insert roll from next time

// INSERT INTO student_details (Roll, Name, Age, Gender)
// VALUES
//('Shimuli',14,'Female'),
//('Abbas',15,'Male'),
//('Easha',16,'Female'),
//('Toufiq',13,'Male'),
//('Habib',15,'Male'),
//('Rubina',15,'Female'),
//('Nadia',16,'Female'),
//('Shamonti',14,'Female');

// CREATE TABLE exam_results(
//     Reg_No int NOT NULL,
//     Roll int,
//     GPA double(3,2),
//     Group_name varchar(15),
//     PRIMARY KEY(Reg_No)
// );

// INSERt INTO exam_results (Reg_No, Roll, GPA, Group_name) VALUES
// (1001,103,4.00,'Science'),
// (1002,105,3.50,'Commerce'),
// (1003,104,3.00,'Arts'),
// (1004,101,3.25,'Science'),
// (1005,102,3.75,'Commerce');

// now join the two tables based on roll

// SELECT student_details.Roll, Reg_no,Name,Gender,GPA
// FROM student_details,exam_results
// WHERE student_details.Roll=exam_results.Roll;

// docs: JOIN Clause
// this is used to combine rows from two or more tables, based on a related column between them and also rename the table name

// SELECT std.Roll, exam.Reg_no,std.Name,std.Gender,exam.GPA
// FROM student_details as std,exam_results as exam
// WHERE std.Roll=exam.Roll;

//note: used join
// SELECT std.Roll, exam.Reg_no,std.Name,std.Gender,exam.GPA
// FROM student_details as std JOIN exam_results as exam
// ON std.Roll=exam.Roll;

// docs: INNER JOIN
// only return rows where there is a match in both tables

//SELECT std.Roll,std.Name,std.Gender,exam.GPA,exam.Group_name
//FROM student_details as std,exam_results as exam
//WHERE std.Roll=exam.Roll;

//SELECT std.Roll,std.Name,std.Gender,exam.GPA,exam.Group_name
//FROM student_details as std INNER JOIN exam_results as exam
//ON std.Roll=exam.Roll;

//docs: LEFT JOIN
//LEFT JOIN (or LEFT OUTER JOIN): This will return all the rows from the left table, and the matched rows from the right table. If no match, the result is NULL on the right side.

//SELECT std.Roll,std.Name,std.Gender,exam.GPA,exam.Group_name
//FROM student_details as std LEFT JOIN exam_results as exam
//ON std.Roll=exam.Roll;

// it will return all rows from left table and matched rows from right table and other left table rows will be null

//docs: RIGHT JOIN
//RIGHT JOIN (or RIGHT OUTER JOIN): This will return all the rows from the right table, and the matched rows from the left table. If no match, the result is NULL on the left side.

//SELECT std.Roll,std.Name,std.Gender,exam.GPA,exam.Group_name
//FROM student_details as std RIGHT JOIN exam_results as exam
//ON std.Roll=exam.Roll;

//docs: UNION and UNION ALL
//The UNION operator combines the results of two SELECT statements and returns distinct rows, eliminating any duplicates.

//The UNION ALL operator also combines the results of two SELECT statements, but it includes all rows from both tables without eliminating duplicates.

/*
-- Sample data for the First batch tour group
CREATE TABLE PROGOTI (
  ID INT,
  Name VARCHAR(50),
  City VARCHAR(50)
);

INSERT INTO PROGOTI (ID, Name, City)
VALUES (1, 'John', 'New York'),
       (2, 'Alice', 'London'),
       (3, 'Acme Corm', 'Sydney');

-- Sample data for the Second batch tour group
CREATE TABLE UNNAYAN (
  ID INT,
  Name VARCHAR(50),
  City VARCHAR(50)
);

INSERT INTO UNNAYAN (ID, Name, City)
VALUES (1, 'ABC Corp', 'Tokyo'),
       (2, 'XYZ Ltd', 'Berlin'),
       (3, 'Acme Corp', 'Sydney');

-- Query using UNION operator to combine results from two tour groups
SELECT ID, Name, City
FROM PROGOTI
UNION
SELECT ID, Name, City
FROM UNNAYAN;

*/

//result:
```
ID  | Name      | City
----|-----------|---------
1   | John      | New York
2   | Alice     | London
3   | Acme Corp | Sydney
1   | ABC Corp  | Tokyo
2   | XYZ Ltd   | Berlin

```//so second er khetreo same sequence thakte hobe // like for first table select er pore id,name,city // sequence should be same in both table // note:
// id,name,city

//and also same number of column should be there in both table.mane first table e 3 column select korci so second table e o 3 column select korte hobe

/*
-- Query using UNION ALL operator to combine results from PROGOTI and UNNAYAN

SELECT ID, Name, City
FROM PROGOTI
UNION ALL
SELECT ID, Name, City
FROM UNNAYAN;

*/

//result:
```
ID  | Name      | City
----|-----------|---------
1   | John      | New York
2   | Alice     | London
3   | Acme Corp | Sydney
1   | ABC Corp  | Tokyo
2   | XYZ Ltd   | Berlin
3   | Acme Corp | Sydney
```;

// docs: VIEW

// A view is a virtual table based on the result-set of an SQL statement.
// mane ami amr full database table kaw k dekhaite chaitecina. just chaitici kicu condition ala jinish dekhuk . or table er kicu part dekhuk. tokhn view use kora hoy

// CREATE VIEW view_name AS
// SELECT column1, column2, ...
// FROM table_name
// WHERE condition;

// SELECT * FROM view_name;

// example

/*
-- Create customers table
CREATE TABLE customers (
  customer_id INT,
  customer_name VARCHAR(100),
  city VARCHAR(100)
);

-- Insert demo data into customers table
INSERT INTO customers (customer_id, customer_name, city) VALUES
  (1, 'John Smith', 'New York'),
  (2, 'Jane Doe', 'Los Angeles'),
  (3, 'David Johnson', 'Chicago');

-- Create orders table
CREATE TABLE orders (
  order_id INT,
  customer_id INT,
  order_amount DECIMAL(10,2)
);

-- Insert demo data into orders table
INSERT INTO orders (order_id, customer_id, order_amount) VALUES
  (101, 1, 150.00),
  (102, 1, 200.00),
  (103, 2, 100.00),
  (104, 3, 75.00),
  (105, 3, 300.00);

-- Create a view to get customer order summary
CREATE VIEW customer_order_summary AS
SELECT
  c.customer_id,
  c.customer_name,
  c.city,
  SUM(o.order_amount) AS total_order_amount
FROM
  customers c
  JOIN orders o ON c.customer_id = o.customer_id
GROUP BY
  c.customer_id,
  c.customer_name,
  c.city;




-- Query the customer_order_summary view
SELECT * FROM customer_order_summary;


//result:


+-------------+---------------+-------------+--------------------+
| customer_id | customer_name | city        | total_order_amount |
+-------------+---------------+-------------+--------------------+
| 1           | John Smith    | New York    | 350.00             |
| 2           | Jane Doe      | Los Angeles | 100.00             |
| 3           | David Johnson | Chicago     | 375.00             |
+-------------+---------------+-------------+--------------------+


*/
