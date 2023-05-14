//docs: create database

// CREATE DATABASE college;

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
// for firstone iv used double quotes because there has space in between them

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
