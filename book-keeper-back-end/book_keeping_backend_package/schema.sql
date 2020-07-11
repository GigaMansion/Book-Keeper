CREATE DATABASE db_bookkeeper;

USE db_bookkeeper;

CREATE TABLE tb_user (
  id VARCHAR(700) PRIMARY KEY,
  member_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  clearance VARCHAR(20) NOT NULL,
  profile_pic VARCHAR(4000) NOT NULL
);

CREATE TABLE tb_reimburse (
    id VARCHAR(700) PRIMARY KEY, 
    product_name VARCHAR(100) NOT NULL, 
    classification VARCHAR(100) NOT NULL, 
    item_website_link VARCHAR(1000) NOT NULL, 
    price VARCHAR(10) NOT NULL,
    quantity VARCHAR(10) NOT NULL, 
    delivery VARCHAR(100) NOT NULL, 
    date_needed VARCHAR(100) NOT NULL,
    reason_to_purchase VARCHAR(200) NOT NULL, 
    recipient_photo_url VARCHAR(4000) NOT NULL, 
    approval_status VARCHAR(20) NOT NULL, 
    time_created TEXT NOT NULL, 

    user_id VARCHAR(700),
    FOREIGN KEY (user_id)
      REFERENCES tb_user(id)
);