import pytest

from book_keeping_backend_package import app

@pytest.fixture
def client():
    app.config['TESTING'] = True

    with app.test_client() as client:
        yield client


def test_test_index(client):
    """Test the test_index.html page"""

    rv = client.get('/login')
    assert b'yes' in rv.data