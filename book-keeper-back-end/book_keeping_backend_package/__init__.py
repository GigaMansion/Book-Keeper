from logging.config import dictConfig
from flask import Flask
from config import Config
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# configuration
dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
    },
})

# create the flask instance
app = Flask(__name__, 
            static_url_path='',
            static_folder='templates',
            template_folder='templates')

# apply configuration
app.config.from_object(Config)

# add the database adaptor to the flask instance
db = SQLAlchemy(app)

# add the database migrate support to the flask instance
migrate = Migrate(app, db)

# mange user session
login_manager = LoginManager(app)

# set the function that handles views
# which require users to login to be able to see
login_manager.login_view = 'route_test_login'

# login_manager.init_app(app)

from book_keeping_backend_package import routes, models, errors