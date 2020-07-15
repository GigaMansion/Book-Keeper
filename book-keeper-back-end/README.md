## Steps:

1. Setup **virtualenv** (only for first time running).

2. Activate **virtualenv**.

3. Install Python packages (do this if package not installed or version changes).

## Virtualenv

Setup:

```
python3 -m venv venv
```

Activate virtualenv:

```
venv\Scripts\activate
```

Deactivate virtualenv:

```
deactivate
```

## Install Python Packages

```
pip3 install -r requirements.txt
```

## Run the Python Flask Application

Set the environment variable, excluding `<`, `>`:

```
set <variable_name>=<value>
```

Run `npm run build` in the front-end folder to build React application.

Then copy the content in the **build** folder to the **book_keeping_backend_package/templates/** folder in the back-end folder.

Run the application:

```
flask run
```

## Run Python Interactively with Install Packages

After activating virtualenv, run:

```
venv\Scripts\python.exe
```

Then type Python code in the interactive shell.

Or use:

```
flask shell
```

with the application instance pre-imported.

## Database

Launch **MySQL** and **phpmyadmin** in Docker:

```
docker-compose up
```

Open ```localhost:8080``` in browser to connect:

```
Server: book_keeper_db
Username: wilson
Password: password
```

## Unit Tests

Run unit tests:
```
set PYTHONPATH=.
coverage run -m pytest
```

Pytest will run any files with the name of the form test_*.py or *_test.py in the current and all subdirectories.

Unit tests for this backend project locate in the `unit_test` directory.

Open `htmlcov/index.html` to see the code coverage report in a browser.

Or run

```
coverage report -m
```

to see the code coverage report in terminal.

## Docker Build & Run Backend Image:

Build the image:

```
docker build -t book-keeper-back-end .
```

Run the image:

```
docker run -d -p 5000:5000 book-keeper-back-end
```

Build and run the image with **docker-compose**:

```
docker-compose up -d
```

Tag the built image:

```
docker tag book-keeper-back-end <Docker Hub username>/book-keeper-back-end
```

Push the built image to Docker Hub:

```
docker push <Docker Hub username>/book-keeper-back-end
```

## Docker Run MySQL:

Create a named volume for persisting data:

```
docker volume create book-keeper-db
```

Create the network for different containers to communicate with each other:

```
docker network create book-keeper-app
```

Start the MySQL container within the created network and give it an alias:

```
docker run -d \
    --network book-keeper-app --network-alias mysql \
    -v $(pwd)/docker_mysql_dir:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=db-book-keeper \
    -p 3306:3306 \
    mysql:5.7
```

## Docker Named Space Operations

List docker named spaces:

```
docker volume ls
```

Check information for one specific named spaces

```
docker volume inspect <Names Space Name>
```

## `Root` Directory Structure

| `Directory/File`               	| Description                                     	|
|------------------------------	|-------------------------------------------------	|
| `book_keeping_backend_package/` 	| Backend application package.                     	|
| `migrations/`                     | Migration scripts for updating database           |
| `unit_test/`                    	| Unit test files.                                 	|
| `.flaskenv`                    	| Python flask runtime environment variables.    	|
| `.gitignore`                   	| Gitignore description for the current directory. 	|
| `app.db`                          | SQLite database file.                             |
| `book_keep_backend_api.py`     	| Entry point for running the backend application. 	|
| `book-keeper-back-end`            | Nginx configurations.                             |
| `book-keeper-back-end.service`    | Service unit file included in systemd.            |
| `config.py`                   	| Configuration file for the backend application.  	|
| `deployment.sh`                   | Book-Keeper back-end deployment script.           |
| `README.md`                    	| README for the backend application.              	|
| `requirement.txt`              	| Python package list with version numbers.        	|
| `wsgi.py`                         | WSGI entry point for the web application.         |

## `book_keeping_backend_package` Directory Structure

| `Directory/File` 	| Description                             	|
|----------------	|-----------------------------------------	|
| `templates/`     	| React build files                       	|
| `__init__.py`    	| Package entry point                     	|
| `routes.py`      	| Routing used in the backend application 	|