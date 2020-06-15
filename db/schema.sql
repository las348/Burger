DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;

create table burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name varchar(50) NOT NULL,
devoured boolean DEFAULT false,
createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)
);