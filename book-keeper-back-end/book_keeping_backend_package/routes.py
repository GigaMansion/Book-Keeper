from flask import render_template
from book_keeping_backend_package import app

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Wilson'}
    
    return render_template('index.html')