import pytest

import sys
sys.path.append("../")

from config import Config
from book_keeping_backend_package import create_app



def func(x):
    return x+1


def test_func():
    assert func(3) == 4


class UnitTestConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite://'