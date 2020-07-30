# imports
import datetime
import pymongo

# connection to mongo db
client = pymongo.MongoClient("mongodb://localhost:27017/")
database = client["torthubdb"]
tempCol = database["temperature"]
humidCol = database["humidity"]

# method to get data in mongo
def getTempFromDb():
    result = tempCol.find().sort("time", -1).limit(50)
    return result

# method to update data in mongo
def updateTempHumidInDb(temperature, humidity):
    current_time = datetime.datetime.now()
    tempData = { "time": current_time, "temperature": temperature }
    humidData = { "time": current_time, "humidity": humidity }

    tempCol.insert_one(tempData)
    humidCol.insert_one(humidData)