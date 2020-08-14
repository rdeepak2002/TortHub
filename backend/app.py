# imports
import os
import json
import subprocess
import shutil
import cv2
from bson import json_util
from importlib import import_module
from flask import Flask, Response, jsonify, send_from_directory, send_file
from camera_opencv import Camera
from threading import Thread
from tasks import update_temp_humid_data
from mongodao import getTempFromDb
from mongodao import getHumidFromDb
try:
    from rpi_rf import RFDevice
except:
    print('Error: Unable to import RFDevice from rpi_rf')

# flask app
app = Flask(__name__, static_folder='build')

# stop caching of files
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

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
    if path != '' and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# route to return video stream
@app.route('/video_feed')
def video_feed():
    return Response(gen(Camera()), mimetype='multipart/x-mixed-replace; boundary=frame')

# get request for getting temperature data
@app.route('/get_temperature', methods=['GET'])
def get_temperature():
    documents = getTempFromDb()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response, default=json_util.default)

# get request for getting sensor data
@app.route('/get_humidity', methods=['GET'])
def get_humidity():
    documents = getHumidFromDb()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response, default=json_util.default)

# get request to turn off light
@app.route('/turnoff_light', methods=['GET'])
def turnoff_light():
    try:
        rfdevice = RFDevice(17)
        rfdevice.enable_tx()
        rfdevice.tx_repeat = 10
        rfdevice.tx_code(4478268, 1, 186, 24)
        rfdevice.cleanup()
        return Response('Light turned off!')
    except:
        return Response('Error with turning off light.')

# get request to turn on light
@app.route('/turnon_light', methods=['GET'])
def turnon_light():
    try:
        rfdevice = RFDevice(17)
        rfdevice.enable_tx()
        rfdevice.tx_repeat = 10
        rfdevice.tx_code(4478259, 1, 186, 24)
        rfdevice.cleanup()
        return Response('Light turned on!')
    except:
        return Response('Error with turning on light.')

# get request to update the server
@app.route('/update_server', methods=['GET'])
def update_server():
    try:
        subprocess.call(['git', 'pull'])
        subprocess.call(['sudo', 'systemctl', 'restart', 'torthubserver.service'])
        return Response('Updated successfully.')
    except:
        return Response('Error updating the server.')

# get request to reboot the server
@app.route('/reboot_server', methods=['GET'])
def reboot_server():
    try:
        subprocess.call(['sudo', 'reboot'])
        return Response('Rebooted successfully.')
    except:
        return Response('Error rebooting the server.')

# get request to see system stats
@app.route('/system_status', methods=['GET'])
def system_status():
    total, used, free = shutil.disk_usage(__file__)
    return jsonify({"total": total, "used": used, "free": free})

# return file for SSL validation
@app.route('/.well-known/pki-validation/<challenge>')
def verify_ssl(challenge):
    filename = app.root_path + '/.well-known/' + challenge
    return send_file(filename)

# main method
if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True, debug=True)
