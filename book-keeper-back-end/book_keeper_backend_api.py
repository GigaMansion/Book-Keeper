from book_keeping_backend_package import create_app, db
from book_keeping_backend_package.models import User, Reimburse

app = create_app()

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Reimburse': Reimburse}