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

        INSERT INTO category
            (category_name)
        VALUES
            ("Glass Art");

        INSERT INTO category
            (category_name)
        VALUES
            ("Paintings");

        INSERT INTO category
            (category_name)
        VALUES
            ("Sculptures");

        INSERT INTO artist
            (artist_name, website, wiki)
        VALUES
            ("RR", "website1", "wiki1");

        INSERT INTO artist
            (artist_name, website, wiki)
        VALUES
            ("SS", "website2", "wiki2");

        INSERT INTO artist
            (artist_name, website, wiki)
        VALUES
            ("WW", "website3", "wiki3");

        SELECT *
        FROM picture