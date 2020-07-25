import pytest


@pytest.fixture
def client():
    print("\nbefore each test")


def test_1(client):
    print("test_1")

def func(x):
    return x+1


def test_func():
    assert func(4) == 5
