from flask import Blueprint

bp = Blueprint('auth', __name__)

from book_keeping_backend_package.auth import forms, routes