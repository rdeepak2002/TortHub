# imports
import time
from mongodao import updateTempHumidInDb
try:
    import board
except:
    print("Error: Unable to import board")
try:
    import adafruit_dht
except:
    print("Error: Unable to import adafruit_dht")

# connect to temp and humid sensor
dhtDevice = None
try:
    dhtDevice = adafruit_dht.DHT22(board.D4)
except:
    print("Error: Unable to initialize dhtDevice")

# thread to get temp and humidity in background
def update_temp_humid_data():
    while True:
        try:
            temperature = (9.0/5.0)*dhtDevice.temperature+32
            humidity = dhtDevice.humidity
            print(temperature)
            print(humidity)
            try:
                updateTempHumidInDb(temperature, humidity)
            except:
                print("error connecting to database")
        except:
            print("error reading from sensor")
        minutes = 15
        seconds = 60*minutes
        time.sleep(seconds)
