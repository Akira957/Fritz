DROP DATABASE IF EXISTS sarah_db;

CREATE DATABASE sarah_db;

USE sarah_db;

CREATE TABLE category
(
    ID INT NOT NULL
    AUTO_INCREMENT,
category_name VARCHAR
    (255) NOT NULL,
PRIMARY KEY
    (ID)
);

    CREATE TABLE artist
    (
        ID INT NOT NULL
        AUTO_INCREMENT,
artist_name VARCHAR
        (255) NOT NULL,
website VARCHAR
        (255) NOT NULL,
wiki VARCHAR
        (255) NOT NULL,
PRIMARY KEY
        (ID)
);

        CREATE TABLE picture
        (
            ID INT NOT NULL
            AUTO_INCREMENT,
title VARCHAR
            (255) NOT NULL,
acquired_from VARCHAR
            (255) NOT NULL,
provenance VARCHAR
            (255) NOT NULL,
book_ref1 VARCHAR
            (255) NOT NULL,
book_ref2 VARCHAR
            (255) NOT NULL,
book_ref3 VARCHAR
            (255) NOT NULL, 
signature BOOLEAN DEFAULT false,
authenticity BOOLEAN DEFAULT false,
price DECIMAL
            (10, 2) NULL,
date_created DATE NOT NULL,
purchase_date DATE NOT NULL,
PRIMARY KEY
            (ID)
);      