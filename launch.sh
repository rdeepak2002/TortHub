cd /home/pi/TortHub/backend
# use this if gevent does not work or leads to bad performance:
/usr/bin/gunicorn3 --timeout 90 --threads 10 --bind 0.0.0.0:5000 app:app
# /usr/bin/gunicorn3 --timeout 90 --worker-class gevent --workers 1 --bind 0.0.0.0:5000 app:app
