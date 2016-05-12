> We get into the mysql console

```
mysql
```

This creates a database. A database stores a bunch of tables. Tables are like google sheets. 

```
create database lifeDB
```

this gets you into the db

```
use lifeDB;
```

create a table of pets with two columns: name, type, age

```
CREATE TABLE pets (
name varchar(30) NOT NULL,
type varchar(30) NOT NULL,
age int NOT NULL
); 
```


```
INSERT INTO pets (name, type, age) VALUES ('fido', 'dog', 3);
```

This shows evrything in the table
```
SELECT * FROM pets;
```