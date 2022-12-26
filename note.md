> DDL-> create,alter,drop

> DML--> insert,select,update,delete

- show databases

```
show databases
```

- create database

```
CREATE TABLE table_name(
  col_name1 data_type(size),
  col_name2 data_type(size),
  PRIMARY KEY(col_name)
  ...
  );
```

example:

```
CREATE TABLE student(
  Roll int(5),
  Age int(10),
  Name varchar(10),
  CGPA double(3,2),
  Gender varchar(10),
  PRIMARY KEY(Roll)
);
```

- rename table

```
RENAME TABLE old_name TO new_name
```

- drop table

```
DROP TABLE table_name;
```

- insert data

```
INSERT INTO tableName VALUES
(data),
(data),
(data);
```

- select

```
SELECT column1, column2, ...
FROM table_name;
```

```
SELECT *
FROM table_name;
```

- limit

```
SELECT column_name(s)
FROM table_name
LIMIT number;
```

- DISTINCT

```
SELECT DISTINCT columnName FROM tableName;
```
