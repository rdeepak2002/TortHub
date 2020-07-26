from importlib import import_module
from flask import Flask, Response, jsonify, send_from_directory
from camera_opencv import Camera
import os
try:
    import Adafruit_DHT
except:
    print("Error: Unable to import Adafruit_DHT!")
try:
    from rpi_rf import RFDevice
except:
    print("Error: Unable to import RFDevice from rpi_rf!")

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

@app.route('/sensor_stats', methods=['GET'])
def sensor_stats():
    try:
        humidity, temperature = Adafruit_DHT.read_retry(Adafruit_DHT.DHT22, 4)
        print(humidity)
        print(temperature)
        return jsonify({
            'temperature':str(temperature),
            'humidity':str(humidity)
        })
    except:
        return Response("Error with reading from sensor.")

@app.route('/turnoff_light', methods=['GET'])
def turnoff_light():
    try:
        rfdevice = RFDevice(17)
        rfdevice.enable_tx()
        rfdevice.tx_repeat = 10
        rfdevice.tx_code(4478268, 1, 186, 24)
        rfdevice.cleanup()
    except:
        return Response("Error with turning off light.")

@app.route('/turnon_light', methods=['GET'])
def turnoff_light():
    try:
        rfdevice = RFDevice(17)
        rfdevice.enable_tx()
        rfdevice.tx_repeat = 10
        rfdevice.tx_code(4478259, 1, 186, 24)
        rfdevice.cleanup()
    except:
        return Response("Error with turning on light.")

@app.route('/video_feed')
def video_feed():
    return Response(gen(Camera()), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True, debug=True)
