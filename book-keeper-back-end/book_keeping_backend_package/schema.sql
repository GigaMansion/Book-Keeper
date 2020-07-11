CREATE TABLE tb_user (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  profile_pic TEXT NOT NULL
);

CREATE TABLE tb_reimburse (
    id TEXT PRIMARY KEY, 
    product_name TEXT NOT NULL, 
    classification TEXT NOT NULL, 
    item_website_link TEXT NOT NULL, 
    price TEXT NOT NULL,
    quantity TEXT NOT NULL, 
    delivery TEXT NOT NULL, 
    date_needed TEXT NOT NULL,
    reason_to_purchase TEXT NOT NULL, 
    recipient_photo_url TEXT NOT NULL, 
    approval_status TEXT NOT NULL, 
    timestamp TEXT NOT NULL, 
    user_id TEXT FOREIGN KEY REFERENCES tb_user(id)
);