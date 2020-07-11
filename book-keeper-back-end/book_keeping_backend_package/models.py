import base64
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import os
from flask_login import UserMixin
from book_keeping_backend_package.db_utilities import get_db

from book_keeping_backend_package import db, login_manager

class User(UserMixin, db.Model):

    def __init__(self, id_, member_name, email, profile_pic):
        self.id = id_
        self.member_name = member_name
        self.email = email
        self.profile_pic = profile_pic


    @staticmethod
    def get(user_id):
        db = get_db()
        user = db.execute(
            "SELECT * FROM tb_user WHERE id = ?", (user_id,)
        ).fetchone()
        if not user:
            return None

        user = User(
            id_=user[0], member_name=user[1], email=user[2], profile_pic=user[3]
        )
        return user


    @staticmethod
    def create(id_, member_name, email, profile_pic):
        db = get_db()
        db.execute(
            "INSERT INTO tb_user (id, member_name, email, profile_pic) "
            "VALUES (?, ?, ?, ?)",
            (id_, member_name, email, profile_pic),
        )
        db.commit()


class Reimburse(db.Model):

    def __repr__(self):
        return '<Reimburse {}>'.format(self.body)


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
        db = get_db()
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
        db = get_db()
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


    @staticmethod
    def create(id_, product_name, classification, item_website_link, price,
               quantity, delivery, date_needed, reason_to_purchase, recipient_photo_url, 
               approval_status, time_created, user_id):
        db = get_db()
        db.execute(
            "INSERT INTO tb_reimburse (id, product_name, classification, item_website_link, price, \
               quantity, delivery, date_needed, reason_to_purchase, recipient_photo_url, \
               approval_status, time_created, user_id) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (id_, product_name, classification, item_website_link, price,
            quantity, delivery, date_needed, reason_to_purchase, recipient_photo_url, 
            approval_status, time_created, user_id),
        )
        db.commit()


@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))