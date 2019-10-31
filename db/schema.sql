-- the database name is jawsDB given db name that I have to use in order for the heroku app to connect to mysql workbench
DROP DATABASE IF EXISTS xi39uusv5rxkzw9r;
CREATE DATABASE xi39uusv5rxkzw9r;
USE xi39uusv5rxkzw9r;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOL DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

