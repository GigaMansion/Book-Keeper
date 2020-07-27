import base64
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import os
import jwt
from flask_login import UserMixin

from book_keeping_backend_package import db, token_redis_db

from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship

class User(UserMixin, db.Model):

    __tablename__ = 'tb_user'

    id = db.Column(db.String(700), primary_key=True)
    member_name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    clearance = db.Column(db.String(20))
    profile_pic = db.Column(db.String(4000), unique=True)

    children = relationship("Reimburse", back_populates="parent")

    def __init__(self, id_, member_name, email, clearance, profile_pic):
        self.id = id_
        self.member_name = member_name
        self.email = email
        self.clearance = clearance
        self.profile_pic = profile_pic


class Reimburse(db.Model):

    __tablename__ = 'tb_reimburse'

    id = db.Column(db.String(700), primary_key=True)
    product_name = db.Column(db.String(100))
    classification = db.Column(db.String(100))
    item_website_link = db.Column(db.String(1000))
    price = db.Column(db.String(10))
    quantity = db.Column(db.String(10))
    delivery = db.Column(db.String(100))
    date_needed = db.Column(db.String(100))
    reason_to_purchase = db.Column(db.String(200))
    recipient_photo_url = db.Column(db.String(4000))
    approval_status = db.Column(db.String(20))
    time_created = db.Column(db.String(100))

    user_id = db.Column(db.String(700), ForeignKey('tb_user.id'))
    parent = relationship("User", back_populates="children")

    def __init__(self, id_, product_name, classification, item_website_link, price,
                 quantity, delivery, date_needed, reason_to_purchase, recipient_photo_url, 
                 approval_status, time_created, user_id):

        self.id = id_
        self.product_name = product_name
        self.classification = classification
        self.item_website_link = item_website_link
        self.price = price
        self.quantity = quantity
        self.delivery = delivery
        self.date_needed = date_needed
        self.reason_to_purchase = reason_to_purchase
        self.recipient_photo_url = recipient_photo_url
        self.approval_status = approval_status
        self.time_created = time_created
        self.user_id = user_id


    @staticmethod
    def get_via_user_id(user_id):
        db = get_mysql_db()
        reimburse_list = db.execute(
            "SELECT * FROM tb_reimburse WHERE user_id = ?", (user_id,)
        )
        if not reimburse_list:
            return None

        reimburse_list_parsed = []

        for el in reimburse_list:
            reimburse_list_parsed.append(Reimburse(
                id = el[id],
                product_name = el[product_name],
                classification = el[classification],
                item_website_link = el[item_website_link],
                price = el[price],
                quantity = el[quantity],
                delivery = el[delivery],
                date_needed = el[date_needed],
                reason_to_purchase = el[reason_to_purchase],
                recipient_photo_url = el[recipient_photo_url],
                apprival_status = el[approval_status],
                time_created = el[time_created]
            ))

        return reimburse_list_parsed


    @staticmethod
    def get_via_approval_status(approval_status):
        db = get_mysql_db()
        reimburse_list = db.execute(
            "SELECT * FROM tb_reimburse WHERE approval_status = ?", (approval_status,)
        )
        if not reimburse_list:
            return None

        reimburse_list_parsed = []

        for el in reimburse_list:
            reimburse_list_parsed.append(Reimburse(
                id = el[id],
                product_name = el[product_name],
                classification = el[classification],
                item_website_link = el[item_website_link],
                price = el[price],
                quantity = el[quantity],
                delivery = el[delivery],
                date_needed = el[date_needed],
                reason_to_purchase = el[reason_to_purchase],
                recipient_photo_url = el[recipient_photo_url],
                time_created = el[time_created],
                user_id = el[user_id]
            ))

        return reimburse_list_parsed

