cd /backend
gunicorn3 --timeout 30 --threads 10 --bind 0.0.0.0:5000 app:app
