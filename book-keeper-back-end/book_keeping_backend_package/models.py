from datetime import datetime
from book_keeping_backend_package import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    username = db.Column(db.String(64), index=True, unique=True)

    email = db.Column(db.String(120), index=True, unique=True)
    
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.username)


class Reimburse(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    product_name = db.Column(db.String(140))

    classification = db.Column(db.String(140))

    american_website_link = db.Column(db.String(512))

    item_website_link = db.Column(db.String(512))

    price = db.Column(db.Float)

    quantity = db.Column(db.Integer)

    delivery = db.Column(db.String(512))

    date_needed = db.Column(db.DateTime)

    reason_to_purchase = db.Column(db.String(1024))

    recipient_photo_url = db.Column(db.String(512))

    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Reimburse {}>'.format(self.body)