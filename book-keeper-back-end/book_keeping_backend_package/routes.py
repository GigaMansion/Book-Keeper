from flask import render_template, flash, redirect, url_for
from book_keeping_backend_package import app
from book_keeping_backend_package.forms import LoginForm

@app.route('/')
@app.route('/index')
def route_index():
    """
    return a fully-populated login page
    for user to enter credentials
    """
    # user = {'username': 'Wilson'}
    app.logger.info("/ request received")
    
    return render_template('index.html')


@app.route('/login')
def route_login():
    """
    handles user login
    handles user session
    """
    status = 'yes'
    return status


@app.route('/dashboard')
def route_dashboard():
    """
    handles the view after user login
    users with different privilages have different views
    """
    status = 'yes'
    return status


@app.route('/new_reimburse_request')
def route_new_reimburse_request():
    """
    handles new reimbursement request from users
    """
    status = 'yes'
    return status


@app.route('/cancel_reimburse_request')
def route_cancel_reimburse_request():
    """
    handles requests for canceling reimbursement
    users can only submit or cancel reimbursement
    user cannot modify submitted request
    """
    status = 'yes'
    return status


@app.route('/see_reimburse_history')
def route_see_reimburse_history():
    """
    return a list of reimbursement history
    including submitted, canceled, processed reimbursement request
    """
    status = 'yes'
    return status


@app.route('/account_settings')
def route_account_settings():
    """
    handles user operation for changing
    username, password
    """
    status = 'yes'
    return status


@app.route('/data_visualization')
def route_data_visualization():
    """
    return a list of simplified reimbursement history
    """
    status = 'yes'
    return status


@app.route('/process_reimburse')
def route_process_reimburse():
    """
    for privilaged user only
    for permitting or rejecting the reimbursement request
    """
    status = 'yes'
    return status    


@app.route('/logout')
def route_logout():
    """
    handles user logout operation
    terminate user session
    """
    status = 'yes'
    return status


"""
the routes below are for the testing application
not to be used in production
"""

@app.route('/test_index')
def route_test_index():
    """
    return a fully functional webpage for testing
    disable this route in production environment
    via the configuration file
    """
    app.logger.info("/test_index request received")

    user = {'username': 'Wilson'}

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

    return render_template('test_pages/test_index.html', title='Home', user=user, posts=posts)


@app.route('/test_login', methods=['GET', 'POST'])
def route_test_login():
    """
    route test for login
    """
    app.logger.info("/test_login request received")

    form = LoginForm()

    if form.validate_on_submit():

        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))

        return redirect(url_for('route_test_index'))

    return render_template('test_pages/test_login.html', title='Sign In', form=form)