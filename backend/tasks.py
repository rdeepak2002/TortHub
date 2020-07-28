# imports
import time
import datetime
import pymongo
try:
    import adafruit_dht
except:
    print("Error: Unable to import Adafruit_DHT!")

# connection to mongo db
client = pymongo.MongoClient("mongodb://localhost:27017/")
database = client["torthubdb"]
tempCol = database["temperature"]
humidCol = database["humidity"]

# connect to sensor
dhtDevice = adafruit_dht.DHT22(board.D4)

# thread to get temp and humidity in background
def update_temp_humid_data():
    while True:
        # try:
        temperature = dhtDevice.temperature
        humidity = dhtDevice.humidity
        # humidity, temperature = Adafruit_DHT.read_retry(Adafruit_DHT.DHT22, 4)
        updateTempHumidInDb(temperature, humidity)
        # except:
        #     print("error reading from sensor")

        time.sleep(10)

# method to update data in mongo
def updateTempHumidInDb(temperature, humidity):
    current_time = datetime.datetime.now()
    tempData = { "time": current_time, "temperature": temperature }
    humidData = { "time": current_time, "humidity": humidity }

    tempCol.insert_one(tempData)
    humidCol.insert_one(humidData)
