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
