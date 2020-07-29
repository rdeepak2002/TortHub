# update and upgrade os and packages
sudo apt-get update -y
sudo apt-get full-upgrade -y
# install necessary packages for OpenCV, NGINX, Gunicorn, Mongo, and pip3
sudo apt-get install libgpiod2 -y
sudo apt-get install libqtgui4 -y
sudo apt-get install python3-pyqt5 -y
sudo apt-get install libqt4-test -y
sudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev -y
sudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev -y
sudo apt-get install libatlas-base-dev -y
sudo apt-get install libjpeg-dev libtiff5-dev libpng12-dev -y
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev -y
sudo apt-get install libgtk2.0-dev libgtk-3-dev -y
sudo apt-get install libavformat-dev libswscale-dev openexr libopenexr-dev -y
sudo apt-get install libqt4-dev -y
sudo apt-get install libgstreamer0.10-0-dbg libgstreamer0.10-0 libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev -y
sudo apt-get install libgstreamer1.0-0 -y
sudo apt-get install python-opencv -y
sudo apt-get install python3-pip -y
sudo apt-get install mongodb -y
sudo apt-get install nginx -y
sudo apt-get install gunicorn3 -y
# enable nginx and mongo
sudo /etc/init.d/nginx start
sudo systemctl enable mongodb
sudo systemctl start mongodb
# pip3 packages
pip3 install Flask
pip3 install opencv-python==3.4.3.18
pip3 install adafruit-circuitpython-dht
pip3 install rpi-rf
pip3 install pymongo
# reboot
sudo reboot
