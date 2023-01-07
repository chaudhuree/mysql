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

