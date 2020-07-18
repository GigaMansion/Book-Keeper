from functools import wraps

import jwt

from book_keeping_backend_package import db_utilities

def generate_token(secret):

    encoded_jwt = jwt.encode({"string": "liang shen zui shuai!"}, secret, algorithm='HS256')

    return encoded_jwt


def revoke_token():
    pass


def token_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):

        token = None
        
        if 'x-access-tokens' in request.headers:
         token = request.headers['x-access-tokens']

        if not token:
            return jsonify({'message': 'missing token'})

        try:
            user_email = db_utilities.get_redis_db_val(token)
            print("token found!", token)
        except:
            return jsonify({'message': 'token invalid'})

        return f(user_email, *args, **kwargs)

    return decorated_function