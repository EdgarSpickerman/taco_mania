drop database if exists taco_mania_db;
create database taco_mania_db;
use taco_mania_db;
create table tacos(
  id int auto_increment not null primary key,
  devoured boolean not null default false,
  name varchar(255) not null unique
);