# imports
from importlib import import_module
from flask import Flask, Response, jsonify, send_from_directory, send_file
from camera_opencv import Camera
from threading import Thread
from tasks import update_temp_humid_data
import os
try:
    import Adafruit_DHT
except:
    print("Error: Unable to import Adafruit_DHT!")
try:
    from rpi_rf import RFDevice
except:
    print("Error: Unable to import RFDevice from rpi_rf!")

# flask app
app = Flask(__name__, static_folder='build')

# background thread for updating temperature data
thread = Thread(target=update_temp_humid_data)
thread.daemon = True
thread.start()

# generator for video stream
def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

# default path for react spa to work properly
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# route to return video stream
@app.route('/video_feed')
def video_feed():
    return Response(gen(Camera()), mimetype='multipart/x-mixed-replace; boundary=frame')

# get request for getting sensor data
@app.route('/sensor_stats', methods=['GET'])
def sensor_stats():
    return Response("Return mongo data here")

# get request to turn off light
@app.route('/turnoff_light', methods=['GET'])
def turnoff_light():
    try:
        rfdevice = RFDevice(17)
        rfdevice.enable_tx()
        rfdevice.tx_repeat = 10
        rfdevice.tx_code(4478268, 1, 186, 24)
        rfdevice.cleanup()
        return Response("Light turned off!")
    except:
        return Response("Error with turning off light.")

# get request to turn on light
@app.route('/turnon_light', methods=['GET'])
def turnon_light():
    try:
        rfdevice = RFDevice(17)
        rfdevice.enable_tx()
        rfdevice.tx_repeat = 10
        rfdevice.tx_code(4478259, 1, 186, 24)
        rfdevice.cleanup()
        return Response("Light turned on!")
    except:
        return Response("Error with turning on light.")

# return file for SSL validation
@app.route('/.well-known/pki-validation/<challenge>')
def verify_ssl(challenge):
    filename = app.root_path + '/.well-known/' + challenge
    return send_file(filename)

# main method
if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True, debug=True)
