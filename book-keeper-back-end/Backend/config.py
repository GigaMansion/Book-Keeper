import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'college-station'
    
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'mysql+mysqlconnector://wilson:password@book_keeper_db/db_bookkeeper'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    