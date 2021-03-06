import pytest
import redis
import os

from config import Config
from book_keeping_backend_package import create_app, db
import book_keeping_backend_package
from book_keeping_backend_package.models import User, Reimburse


class UnitTestConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'mysql+mysqlconnector://wilson:password@book_keeper_db_pytest/db_bookkeeper'


book_keeping_backend_package.token_redis_db = redis.Redis(host='token_redis_db_pytest', port=6379)

@pytest.fixture
def backend_server():
    backend = create_app(UnitTestConfig)

    with backend.test_client() as backend_server:
        yield backend_server

    book_keeping_backend_package.token_redis_db.flushall()

    with backend.app_context():
        db.session.query(Reimburse).delete()
        db.session.query(User).delete()
        db.session.commit()