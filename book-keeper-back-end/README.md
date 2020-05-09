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

Set the environment variable:

```
set <variable_name>=<value>
```

Please run `npm run build` in the front-end folder to build React application.

Then copy the content in the **build** folder to the **book_keeping_backend_package/templates** folder in the back-end folder.

Run the application:

```
flask run
```

## Run Unit Tests

```
pytest
```