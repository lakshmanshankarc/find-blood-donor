-- Database file for the Find Donor Application

-- Database Name BloodDB
DROP DATABASE BloodDB; 
-- Table Name Donor
CREATE DATABASE BloodDB;

-- Use DB
USE BloodDB;

-- Table UserTable
CREATE TABLE UserTable (
  username varchar(20),
  age varchar(20),
  email varchar(30),
  password varchar(150),
  bloodgroup varchar(10),
  telegramlink varchar(50),
  location varchar(30),
  role varchar(30),
  donoravailon varchar(50) default ""
);
ALTER TABLE UserTable ADD PRIMARY KEY(email);
-- Path /sql/main.sql
