from importlib import import_module
from flask import Flask, Response, json, send_from_directory
from camera_opencv import Camera
import os
try:
    import Adafruit_DHT
except:
    print("Unable to import Adafruit_DHT!")

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
        return jsonify(
            'temperature':temperature,
            'humidity':humidity
        )
    except:
        return Response("Error with reading from sensor.")

@app.route('/video_feed')
def video_feed():
    return Response(gen(Camera()), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True, debug=True)
