cd /home/pi/TortHub/backend
/usr/bin/gunicorn3 --timeout 90 --threads 10 --bind 0.0.0.0:5000 app:app
