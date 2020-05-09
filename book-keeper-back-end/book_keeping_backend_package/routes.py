from flask import render_template
from book_keeping_backend_package import app
from book_keeping_backend_package.forms import LoginForm

@app.route('/')
@app.route('/index')
def index():
    # user = {'username': 'Wilson'}
    app.logger.info("/ request received")
    
    return render_template('index.html')


@app.route('/test_index')
def test_index():
    app.logger.info("/test_index request received")

    form = LoginForm()

    user = {'username': 'Wilson'}
    posts = [
        {
            'author': {'username': 'Johnathan'},
            'body': 'Bad day in College Station!'
        },
        {
            'author': {'username': 'Kelvin'},
            'body': 'The Avengers movie was not cool!'
        }
    ]
    
    return render_template('test_index.html', title='Home', user=user, posts=posts, form=form)