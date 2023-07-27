CREATE DATABASE bookDB;

CREATE TABLE books (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(255)
);


INSERT INTO books (id,name,description) VALUES (1,'shaber','my name is shaber ahmad');
