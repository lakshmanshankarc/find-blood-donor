-- Database file for the Find Donor Application
-- Database Name BloodDB
-- Table Name Donor
DROP DATABASE BloodDB;
CREATE DATABASE BloodDB;

-- -- Use DB
USE BloodDB;

-- Table UserTable
CREATE TABLE UserTable (
  user_id INT NOT NULL AUTO_INCREMENT,
  username varchar(20),
  age varchar(20),
  email varchar(30),
  password varchar(150),
  bloodgroup varchar(10),
  telegramlink varchar(50),
  location varchar(30),
  role varchar(30),
  donoravailon varchar(50) default "",
  PRIMARY KEY(user_id),
  UNIQUE KEY(email)
);

CREATE TABLE DonorTable(
  donor_id INT,
  date varchar(50) default "",
  FOREIGN KEY (donor_id) REFERENCES UserTable(user_id)
);

