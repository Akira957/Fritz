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

INSERT INTO picture
    (title, acquired_from, provenance, book_ref1, book_ref2, book_ref3, signature, authenticity, price, date_created, purchase_date)
VALUES
    ("Painting", "Italy", "origin1", "book1", "book2", "book3", false, false, 99.99, "1199-12-12", "1997-02-20");

INSERT INTO picture
    (title, acquired_from, provenance, book_ref1, book_ref2, book_ref3, signature, authenticity, price, date_created, purchase_date)
VALUES
    ("Glass", "France", "origin2", "book1", "book2", "book3", false, false, 34.99, "1234-11-23", "1998-05-30");

INSERT INTO picture
    (title, acquired_from, provenance, book_ref1, book_ref2, book_ref3, signature, authenticity, price, date_created, purchase_date)
VALUES
    ("Sculpture", "Mexico", "origin3", "book1", "book2", "book3", false, false, 45.99, "1567-03-11", "2002-07-12");



SELECT *
FROM picture