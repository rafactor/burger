DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger (
    burger_id SERIAL,
    burger_name TEXT,
    devoured BOOLEAN DEFAULT false,
	primary key(burger_id)
)
