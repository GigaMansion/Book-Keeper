from flask import render_template, flash, redirect, url_for, request, current_app
from flask_login import current_user, login_user, logout_user
from werkzeug.urls import url_parse
from datetime import datetime

import jwt

import uuid

from book_keeping_backend_package import db, token_redis_db, allowed_user
from book_keeping_backend_package.auth import bp, tokens
from book_keeping_backend_package.models import User, Reimburse


@bp.route('/')
@bp.route('/index')
def route_index():
    """
    return a fully-populated login page
    for user to enter credentials
    """
    current_app.logger.info("/ request received")

    return render_template('index.html')


@bp.route('/user/login', methods=['POST'])
def route_user_login():
    """
    handles user login
    with email address, id, image URL and name returned
    """
    email = request.json['email']
    id_ = request.json['id']
    image_URL = request.json['imageUrl']
    name = request.json['name']

    if email in allowed_user:
        print(email, id_, image_URL, name)

        encoded_jwt = tokens.generate_token(email)

        print(encoded_jwt)

        token_redis_db.set(encoded_jwt, email)
        token_redis_db.set(email, encoded_jwt)

        check_for_repeated_registration = User.query.filter_by(email=email).first()

        if check_for_repeated_registration is None:
            user = User(
                id_ = id_,
                member_name = name,
                email = email,
                clearance = allowed_user[email],
                profile_pic = image_URL
            )
            
            db.session.add(user)

            db.session.commit()

        return encoded_jwt, 200

    return {'message': 'no user found'}, 404


@bp.route('/reimburse/submit', methods=['POST'])
@tokens.token_required
def route_reimburse_submit(user_email):
    print("submission!")
    token = request.headers['authorization']
    payload = request.get_json()
    print(payload)
    classification = payload['classification']
    date_needed = payload['dateNeeded']

    reimburse = Reimburse(
        id_=str(uuid.uuid4()), 
        product_name=payload['productName'], 
        classification=payload['classification'], 
        item_website_link=payload['itemUrl'], 
        price=payload['price'],
        quantity=payload['quantity'], 
        delivery=payload['deliveryFee'], 
        date_needed=payload['dateNeeded'], 
        reason_to_purchase=payload['reasonToPurchase'], 
        recipient_photo_url='', 
        approval_status='awaiting', 
        time_created=datetime.utcnow(), 
        user_id=User.query.filter_by(email=user_email).first().id
    )

    db.session.add(reimburse)

    db.session.commit()

    print(token, classification, date_needed)

    return {'message': 'OK'}, 200



@bp.route('/reimburse/reject/<id>', methods=['POST'])
@tokens.token_required
def route_reject_reimburse(user_email):
    record = Reimburse.query.filter_by(id=id).first()
    record.update({"approval_status":"approved"})

    db.session.commit()
    return {'message': 'OK'}, 200


@bp.route('/reimburse/approve/<id>', methods=['POST'])
@tokens.token_required
def route_approve_reimburse(user_email):
    record = Reimburse.query.filter_by(id=id).first()
    record.update({"approval_status":"rejected"})

    db.session.commit()
    return {'message': 'OK'}, 200


@bp.route('/see_reimburse_history/<username>')
@tokens.token_required
def route_see_reimburse_history(username):
    """
    return a list of reimbursement history submitted by the user
    including submitted, canceled, processed reimbursement request
    """

    current_app.logger.info("/see_reimburse_history request received")

    if current_user.get_id() == username:

        user_id = User.query.filter_by(username=username).first_or_404()

        user_reimburse_history = Reimburse.query.filter_by(user_id=user_id)

        res = {
            'user': username,
            'reimburse_history': user_reimburse_history}

        return res
        
    # the current user cannot see other users' reimbursement history
    else:

        res = {
            'user': 'anonymous',
            'reimburse_history': []
        }

        return res


@bp.route('/data_visualization')
def route_data_visualization():
    """
    return a list of simplified reimbursement history
    """
    token_redis_db.set('hello', 'world')

    return 'yes', 200


@bp.route('/user/logout', methods=['POST'])
@tokens.token_required
def route_logout(user_email):
    """
    handles user logout operation
    terminate user session
    """
    token = request.headers['authorization']
    
    tokens.revoke_token(user_email, token)

    return {'message': 'OK'}, 200


