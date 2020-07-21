from logging.config import dictConfig
from flask import Flask
from flask_cors import *
from config import Config
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import logging
from logging.handlers import RotatingFileHandler
import os
from celery import Celery
import redis

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

celery_client = Celery('tasks')
celery_client.conf.broker_url = 'redis://task_queue_redis_db:6380'


@celery_client.task
def add(x, y):
    return x + y


db = SQLAlchemy()

migrate = Migrate()

login_manager = LoginManager()

login_manager.login_view = 'auth.route_test_login'

# login_manager.init_app(app)

token_redis_db = redis.Redis(host='token_redis_db', port=6379)

def create_app(config_class=Config):
    app = Flask(__name__,
                static_url_path='')
                # static_folder='/static')
                # template_folder='/templates')
    CORS(app)
    
    app.config.from_object(config_class)
    
    

    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)

    from book_keeping_backend_package.errors import bp as errors_bp
    app.register_blueprint(errors_bp)

    from book_keeping_backend_package.auth import bp as auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    from book_keeping_backend_package.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    if not app.debug:
        # ...

        if not os.path.exists('logs'):
            os.mkdir('logs')
        file_handler = RotatingFileHandler('logs/book-keeper.log', maxBytes=20480,
                                        backupCount=100)
        file_handler.setFormatter(logging.Formatter(
            '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'))
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)

        app.logger.setLevel(logging.INFO)
        app.logger.info('Book-Keeper starts running')

    return app


from book_keeping_backend_package import models