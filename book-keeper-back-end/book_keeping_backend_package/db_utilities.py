import sqlite3

import click
from flask import current_app, g
from flask.cli import with_appcontext

import redis

def get_mysql_db():
    if "mysql_db" not in g:
        g.mysql_db = sqlite3.connect(
            "sqlite_db", detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.mysql_db.row_factory = sqlite3.Row

    return g.mysql_db

def close_mysql_db(e=None):
    mysql_db = g.pop("mysql_db", None)

    if mysql_db is not None:
        mysql_db.close()

def init_mysql_db():
    mysql_db = get_mysql_db()

    with current_app.open_resource("schema.sql") as f:
        mysql_db.executescript(f.read().decode("utf8"))

@click.command("init-db")
@with_appcontext
def init_db_command():
    """Clear the existing data and create new tables."""
    init_mysql_db()
    click.echo("Initialized the database.")

def init_app(app):
    app.teardown_appcontext(close_mysql_db)
    app.cli.add_command(init_db_command)


def get_redis_db():
    if "redis_db" not in g:
        g.redis_db = redis.Redis(host='localhost', port=6379)

    return g.redis_db


def set_redis_db_val(key_, val_):
    get_redis_db()

    g.redis_db.set(key_, val_)


def get_redis_db_val(key_):
    get_redis_db()

    return g.redis_db.get(key_)
    

def del_redis_db_val(key_):
    get_redis_db()

    g.redis_db.delete(key_)
