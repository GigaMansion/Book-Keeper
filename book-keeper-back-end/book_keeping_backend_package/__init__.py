from logging.config import dictConfig
from flask import Flask
from config import Config

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
    }
})

app = Flask(__name__, 
            static_url_path='',
            static_folder='templates',
            template_folder='templates')

app.config.from_object(Config)

from book_keeping_backend_package import routes