import pytest
import json


def test_login(backend_server):
    res = backend_server.post(
        '/auth/user/login',
        data=json.dumps(
            {
                'email': 'mitfans881@gmail.com',
                'id': 'anonymous',
                'imageUrl': 'google.anonymous',
                'name': 'Wilson Wang'
            }
        ),
        content_type='application/json'
    )

    data = res.get_data(as_text=True)

    assert res.status == '200 OK'
    assert data != None


def test_login_fail(backend_server):
    res = backend_server.post(
        '/auth/user/login',
        data=json.dumps(
            {
                'email': '1@gmail.com',
                'id': 'anonymous',
                'imageUrl': 'google.anonymous',
                'name': 'No One'
            }
        ),
        content_type='application/json'
    )

    data = json.loads(res.get_data(as_text=True))

    assert res.status == '404 NOT FOUND'
    assert data == {'message': 'no user found'}


def test_logout(backend_server):
    res = backend_server.post(
        '/auth/user/login',
        data=json.dumps(
            {
                'email': 'mitfans881@gmail.com',
                'id': 'anonymous',
                'imageUrl': 'google.anonymous',
                'name': 'Wilson Wang'
            }
        ),
        content_type='application/json'
    )

    token = res.get_data(as_text=True)

    res_logout = backend_server.post(
        '/auth/user/logout',
        data=json.dumps(
            {
                'email': 'mitfans881@gmail.com',
            }
        ),
        headers={'authorization': token},
        content_type='application/json'
    )

    data = json.loads(res_logout.get_data(as_text=True))

    assert res_logout.status == '200 OK'
    assert data == {'message': 'OK'}


def test_logout_fail_no_token(backend_server):
    res_logout = backend_server.post(
        '/auth/user/logout',
        data=json.dumps(
            {
                'email': 'mitfans881@gmail.com',
            }
        ),
        content_type='application/json'
    )

    data = json.loads(res_logout.get_data(as_text=True))

    assert res_logout.status == '200 OK'
    assert data == {'message': 'missing token'}


def test_logout_fail_invalid_token(backend_server):
    res_logout = backend_server.post(
        '/auth/user/logout',
        data=json.dumps(
            {
                'email': 'mitfans881@gmail.com',
            }
        ),
        headers={'authorization': 'invalid-token'},
        content_type='application/json'
    )

    data = json.loads(res_logout.get_data(as_text=True))

    assert res_logout.status == '200 OK'
    assert data == {'message': 'token invalid'}