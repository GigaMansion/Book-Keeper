from flask import render_template, flash, redirect, url_for, request, current_app
from flask_login import current_user, login_user, logout_user, login_required
from werkzeug.urls import url_parse
from datetime import datetime

import jwt

from book_keeping_backend_package import db
from book_keeping_backend_package.auth import bp
from book_keeping_backend_package.auth.forms import LoginForm, RegistrationForm, EditProfileForm
from book_keeping_backend_package.models import User, Reimburse


@bp.before_request
def before_request():
    """
    record the last seen time of the user
    """
    if current_user.is_authenticated:
        current_user.last_seen = datetime.utcnow()
        db.session.commit()


@bp.route('/')
@bp.route('/index')
def route_index():
    """
    return a fully-populated login page
    for user to enter credentials
    """
    # user = {'username': 'Wilson'}
    current_app.logger.info("/ request received")

    if current_user.is_authenticated:
        return (
            "<p>Hello, {}! You're logged in! Email: {}</p>"
            "<div><p>Google Profile Picture:</p>"
            '<img src="{}" alt="Google profile pic"></img></div>'
            '<a class="button" href="/logout">Logout</a>'.format(
                current_user.name, current_user.email, current_user.profile_pic
            )
        )
    else:
        return '<a class="button" href="/login">Google Login</a>'
    
    return render_template('Book-Keeper-Front-End-Compiled/index.html')


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

    print(email, id_, image_URL, name)

    encoded_jwt = jwt.encode({"string": "liang shen zui shuai!"}, email, algorithm='HS256')

    print(encoded_jwt)

    return encoded_jwt, 200


@bp.route('/login', methods=['GET', 'POST'])
def route_login():
    """
    handles user login
    handles user session
    """
    current_app.logger.info("/login request received")

    # redirect the user to the index page
    # if the user is already logged in
    if current_user.is_authenticated:

        return redirect(url_for('auth.route_index'))

    # the login form
    form = LoginForm()

    # validate user credentials
    # the "call-back function"
    if form.validate_on_submit():

        # find the user in the application database
        user = User.query.filter_by(username=form.username.data).first()

        # handles invalid user credentials
        if user is None or not user.check_password(form.password.data):

            # send one-time message to the user
            # who attempts to login
            flash('Invalid username or password')

            # redirect the user who enters invalid credentials
            # to the login page
            return redirect(url_for('auth.route_login'))

        # if the user enters the valid credential
        # log the user in
        login_user(user, remember=form.remember_me.data)

        # get the page that the user wants to access before login
        next_page = request.args.get('next')

        # set the redirection page to /index as the default
        # if the user does not request any specific page
        if not next_page or url_parse(next_page).netloc != '':

            next_page = url_for('auth.route_index')

        # redirect the user to the requested page before login
        return redirect(next_page)
        
    # return the login page to the user
    return render_template('login.html', title='Sign In', form=form)


@bp.route('/register', methods=['GET', 'POST'])
def route_register():
    """
    handles user registration
    """

    current_app.logger.info("/register request received")

    # check whether the user is already logged in
    # if so, redirect to the index page
    if current_user.is_authenticated:

        return redirect(url_for('auth.route_index'))

    # create the registration form
    form = RegistrationForm()

    # callback function for registration
    if form.validate_on_submit():

        # get the username from the submitted form
        user = User(username=form.username.data, email=form.email.data)

        # set the user password using the submitted form information
        user.set_password(form.password.data)

        # add the new user to the database session
        db.session.add(user)

        # commit the database session: add the user credential to the database
        db.session.commit()

        # message sent back to the new user
        flash('Congratulations, you are now a registered user!')

        # direct to the login page
        return redirect(url_for('auth.route_login'))

    return render_template('register.html', title='Register', form=form)


@bp.route('/activate', methods=['POST'])
def route_activate():
    """
    handles the user activation
    """
    status = 'yes'
    return status


@bp.route('/see_reimburse_history/<username>')
@login_required
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


@bp.route('/account_settings/<username>', methods=['GET', 'POST'])
@login_required
def route_account_settings():
    """
    handles user operation for changing
    username, password
    """
    form = EditProfileForm(current_user.username)
    status = 'yes'
    return status


@bp.route('/data_visualization')
@login_required
def route_data_visualization():
    """
    return a list of simplified reimbursement history
    """
    status = 'yes'
    return status


@bp.route('/logout/<username>')
@login_required
def route_logout():
    """
    handles user logout operation
    terminate user session
    """
    current_app.logger.info('/logout request received')
    logout_user()

    return redirect(url_for('auth.route_login'))


"""
the routes below are for the testing application
not to be used in production
"""

@bp.route('/test_index')
@login_required
def route_test_index():
    """
    return a fully functional webpage for testing
    disable this route in production environment
    via the configuration file
    """
    current_app.logger.info("/test_index request received")

    posts = [
        {
            'author': {'username': 'Johnathan'},
            'body': 'Bad day in College Station!'
        },
        {
            'author': {'username': 'Kelvin'},
            'body': 'The movie was so bad!'
        }
    ]

    return render_template('test_pages/test_index.html', title='Home', posts=posts)


@bp.route('/test_login', methods=['GET', 'POST'])
def route_test_login():
    """
    route test for login
    """
    current_app.logger.info("/test_login request received")

    if current_user.is_authenticated:

        return redirect(url_for('auth.route_test_index'))

    form = LoginForm()

    if form.validate_on_submit():

        user = User.query.filter_by(username=form.username.data).first()

        if user is None or not user.check_password(form.password.data):

            flash('Invalid username or password')

            return redirect(url_for('auth.route_test_login'))

        login_user(user, remember=form.remember_me.data)

        # get the page that the user wants to access before login
        next_page = request.args.get('next')

        # set the redirection page to /test_index as the default
        # if the user does not request any specific page
        if not next_page or url_parse(next_page).netloc != '':

            next_page = url_for('auth.route_test_index')

        # redirect the user to the requested page before login
        return redirect(next_page)

    return render_template('test_pages/test_login.html', title='Sign In', form=form)


@bp.route('/test_register', methods=['GET', 'POST'])
def route_test_register():
    
    current_app.logger.info("/test_register request received")

    if current_user.is_authenticated:

        return redirect(url_for('auth.route_test_index'))

    form = RegistrationForm()

    if form.validate_on_submit():

        user = User(username=form.username.data, email=form.email.data)

        user.set_password(form.password.data)

        db.session.add(user)

        db.session.commit()

        flash('Congratulations, you are now a registered user!')

        return redirect(url_for('auth.route_test_login'))

    return render_template('test_pages/test_register.html', title='Register', form=form)


@bp.route('/test_logout')
@login_required
def route_test_logout():
    """
    handles user logout operation
    terminate user session
    """
    current_app.logger.info('/test_logout request received')

    logout_user()

    return redirect(url_for('auth.route_test_login'))

