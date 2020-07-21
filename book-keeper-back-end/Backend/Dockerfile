FROM python:3.8.1-slim-buster

WORKDIR /opt/src

COPY ./requirements.txt /opt/src/requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY ./book_keeping_backend_package /opt/src/book_keeping_backend_package

COPY ./config.py /opt/src/config.py

COPY ./book_keeper_backend_api.py /opt/src/book_keeper_backend_api.py

COPY ./.flaskenv /opt/src/.flaskenv

COPY ./user_list.csv /opt/src/user_list.csv