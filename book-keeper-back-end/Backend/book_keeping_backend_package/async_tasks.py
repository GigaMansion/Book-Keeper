import redis, uuid

from celery import Celery
from celery.schedules import crontab

celery_client = Celery('tasks')
celery_client.conf.broker_url = 'redis://task_queue_redis_db:6380'
encryption_key_redis_db = redis.Redis(host='encryption_key_redis_db', port=6381)


@celery_client.on_after_configure.connect
def setup_periodic_tasks(sender, **kwards):

    for i in range(10):
        sender.add_periodic_task(60.0, celery_regenerate_secret.s(i), name='generate secret for' + str(i))

    # sender.add_periodic_task(3.0, celery_test.s('world'), expires=3)

    # sender.add_periodic_task(
    #     crontab(hour=7, minute=30, day_of_week=1),
    #     test.s('Happy Mondays!'),
    # )


@celery_client.task
def celery_regenerate_secret(index):
    secret = str(uuid.uuid4())
    print("index " + str(index) +": " + secret)
    encryption_key_redis_db.set(index, secret)

