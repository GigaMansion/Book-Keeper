-- this sql file is only for develpment use

-- create database
drop database if EXISTS book-keeper;
create database book-keeper;
use book-keeper;

-- create table

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  user_id CHAR(22) NOT NULL,
  name VARCHAR(100),

  PRIMARY KEY(user_id)
);


-- ----------------------------
--  Table structure for `reimburse`
-- ----------------------------
DROP TABLE IF EXISTS reimburse;
CREATE TABLE reimburse (
  user_id CHAR(22) NOT NULL,

  PRIMARY KEY(user_id),
  FOREIGN KEY(user_id) REFERENCES user(user_id)
);
