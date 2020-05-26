FROM python:3.7-alpine
WORKDIR /docker
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
CMD ["flask", "run"]