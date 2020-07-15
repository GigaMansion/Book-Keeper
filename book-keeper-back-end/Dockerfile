# Pull the MySQL 8.0.21 image
FROM mysql:8.0.21

# Set ENVs
ENV MYSQL_DATABASE db_bookkeeper
ENV MYSQL_DATABASE: db_bookkeeper
ENV MYSQL_USER: wilson
ENV MYSQL_PASSWORD: password

# Copy the initialization SQL script
COPY ./SQL-scripts/schema.sql /docker-entrypoint-initdb.d/

# WORKDIR /docker
# COPY requirements.txt requirements.txt
# RUN pip3 install -r requirements.txt
# COPY . .
# CMD ["flask", "run"]