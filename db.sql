CREATE DATABASE bookDB;

CREATE TABLE book (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(255)
);


INSERT INTO book (id,name,description) VALUES (1,'shaber','my name is shaber ahmad');
