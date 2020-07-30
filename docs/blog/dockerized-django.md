---
title: Setting up and Running Django in a Docker Container
lang: en-US
description: 
Python + Django is a great development experience, but unfortunately, dependency managment leaves a lot to be desired (though a lot is solved with Virtualenv - If you haven't seen that before, check it out!).  You can very quickly end up in odd states (particularly on a Mac with the system provided version of Python).
date: "2020-07-29"
---
# Setting up and Running Django in a Docker Container
**7/29/2020**

Python + Django is a great development experience, but unfortunately, dependency managment leaves a lot to be desired (though a lot is solved with Virtualenv - If you haven't seen that before, check it out!).  You can very quickly end up in odd states (particularly on a Mac with the system provided version of Python).
The other day I was working on an old Django app I had written, but never made it to actually publish and landed in what seemed like a hopeless dependency cycle with my Python packages. 
Knowing there had to be a better way I embarked on getting my project running in a Docker container and after a few hours of trial and error got it running!
I've pushed the templates I generated to a repo [here](https://github.com/rreichel3/dockerized-django-templates). You can use it, along with these step by step instructions to be off to the races with a containerized Django setup.
## How to
1. python -m pip install Django
1. Setup your Django Project: `django-admin startproject dockerango`
1. Place each of these files in the `dockerango` directory. That'll be the same directory as `manage.py`
1. Ensure you've configured `settings.py` to point to the database, like below
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'db'
    }
}
```
1. Run `docker-compose build && docker-compose up` 
1. Browse to http://localhost:8000 to verify it's running

Running into issues? Feel free to tweet @ me and I can help debug. 
