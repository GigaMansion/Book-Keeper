FROM python:3.8.1-slim-buster

WORKDIR /opt/src

COPY ./ /opt/src

RUN pip install -r requirements.txt

CMD [ "flask", "run" ]
