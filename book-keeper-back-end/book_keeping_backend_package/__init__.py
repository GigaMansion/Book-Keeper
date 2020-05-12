from logging.config import dictConfig
from flask import Flask
from config import Config
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


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

app = Flask(__name__, 
            static_url_path='',
            static_folder='templates',
            template_folder='templates')

app.config.from_object(Config)

db = SQLAlchemy(app)

migrate = Migrate(app, db)

# login_manager = LoginManager()
# login_manager.init_app(app)

from book_keeping_backend_package import routes, models