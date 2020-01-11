CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR( 255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT FALSE,
  
PRIMARY KEY ( id )
);