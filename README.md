# TortHub
## Author
Deepak Ramalingam

## Description
Tortoise monitoring system with temperature / humidity sensor and night vision camera.

## Requirements for Raspberry Pi 4 (Buster)
* Boot Pi into Desktop mode
* Python 3
* OpenCV (Version 3) for Python 3
* Gunicorn for Python3:
  * sudo apt-get install gunicorn3
  * pip3 install gunicorn

Note: Please reboot the pi after these installations.

## Automatically Install Pip Packages
```sh
pip3 install -r requirements.txt
```

## Manually Install Pip Packages
```sh
pip3 install Flask
pip3 install opencv-python==3.4.3.18
pip3 install Adafruit_DHT
pip3 install rpi-rf
```

## Extra Installations for OpenCV
```sh
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install libqtgui4
sudo apt-get install python3-pyqt5
sudo apt-get install libqt4-test
sudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev
sudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev
sudo apt-get install libatlas-base-dev
sudo apt-get install libjpeg-dev libtiff5-dev libpng12-dev -y
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev -y
sudo apt-get install libgtk2.0-dev libgtk-3-dev -y
sudo apt-get install libavformat-dev libswscale-dev openexr libopenexr-dev
sudo apt-get install libqt4-dev
sudo apt-get install libgstreamer0.10-0-dbg libgstreamer0.10-0 libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev
sudo apt-get install python-opencv
```

Note: Please reboot the pi after these installations.

## Autostart
On a Raspberry Pi 4 run the following command:

```sh
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```

Then add the following line:

```sh
@lxterminal -e /home/pi/TortHub/launch.sh
```
