from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from book_keeping_backend_package import db, login_manager

class User(UserMixin, db.Model):

    id = db.Column(db.Integer, primary_key=True)

    username = db.Column(db.String(64), index=True, unique=True)

    email = db.Column(db.String(120), index=True, unique=True)
    
    password_hash = db.Column(db.String(128))

    last_seen = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


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

    status = db.Column(db.String(32)) # statusm list: SUBMITTED, PERMITTED, REJECTED, CALCELLED

    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Reimburse {}>'.format(self.body)


class EligibleUser(UserMixin, db.Model):

    id = db.Column(db.Integer, primary_key=True)

    email = db.Column(db.String(120), index=True, unique=True)

    def __repr__(self):
        return '<Eligible User with email {}>'.format(self.email)


@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))