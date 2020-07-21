from celery.schedules import crontab

from Backend.book_keeping_backend_package import celery_client

@celery_client.on_after_configure.connect
def setup_periodic_tasks(sender, **kwards):
    sender.add_periodic_task(2.0, celery_test.s('hello'), name='every 2 sec')

    sender.add_periodic_task(3.0, celery_test.s('world'), expires=3)

    sender.add_periodic_task(
        crontab(hour=7, minute=30, day_of_week=1),
        test.s('Happy Mondays!'),
    )

@celery_client.task
def celery_test(x):
    print(x)