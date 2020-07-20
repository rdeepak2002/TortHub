#!/usr/bin/env python
import os
import Adafruit_DHT
from importlib import import_module
from flask import Flask, send_from_directory, Response
from camera_opencv import Camera

app = Flask(__name__, static_folder='build')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/sensor_stats')
def sensor_stats():
    sensor = 2302;
    pin = 4;
    try:
        humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
        return Response(temperature)
    except:
        return Response("Error with reading from sensor.")

@app.route('/video_feed')
def video_feed():
    return Response(gen(Camera()), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True)
