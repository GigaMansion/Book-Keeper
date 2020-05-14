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

Then copy the content in the **build** folder to the **book_keeping_backend_package/templates** folder in the back-end folder.

Run the application:

```
flask run
```

## Run Python Interactively with Install Pakcages

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

Create the database migration repository:

```
flask db init
```

Generate the new database migration script after modifying the database model in the application:

```
flask db migrate
```

Update the database:

```
flask db upgrade
```

Downgrade the most recent upgrade:

```
flask db downgrade
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

## `Root` Directory Structure

| `Directory/File`               	| Description                                     	|
|------------------------------	|-------------------------------------------------	|
| `book_keeping_backend_package/` 	| Backend application package.                     	|
| `migrations`                      | Migration scripts for updating database           |
| `unit_test/`                    	| Unit test files.                                 	|
| `.flaskenv`                    	| Python flask runtime environment variables.    	|
| `.gitignore`                   	| Gitignore description for the current directory. 	|
| `app.db`                          | SQLite database file.                             |
| `book_keep_backend_api.py`     	| Entry point for running the backend application. 	|
| `config.py`                   	| Configuration file for the backend application.  	|
| `README.md`                    	| README for the backend application.              	|
| `requirement.txt`              	| Python package list with version numbers.        	|

## `book_keeping_backend_package` Directory Structure

| `Directory/File` 	| Description                             	|
|----------------	|-----------------------------------------	|
| `templates/`     	| React build files                       	|
| `__init__.py`    	| Package entry point                     	|
| `routes.py`      	| Routing used in the backend application 	|