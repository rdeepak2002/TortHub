# update and upgrade os and packages
sudo apt-get update -y
sudo apt-get full-upgrade -y
# install necessary packages for OpenCV, NGINX, Gunicorn, Mongo, and pip3
sudo apt-get install libgpiod2 -y
sudo apt-get install libqtgui4 -y
sudo apt-get install python3-pyqt5 -y
sudo apt-get install libqt4-test -y
sudo apt-get install cmake -y
sudo apt-get install git -y
sudo apt-get install libgtk2.0-dev -y
sudo apt-get install pkg-config -y
sudo apt-get install libavcodec-dev -y
sudo apt-get install python-dev -y
sudo apt-get install python-numpy -y
sudo apt-get install libtbb2 -y
sudo apt-get install libtbb-dev -y
sudo apt-get install libjpeg-dev -y
sudo apt-get install libpng-dev -y
sudo apt-get install libtiff-dev -y
sudo apt-get install libjasper-dev -y
sudo apt-get install libdc1394-22-dev -y
sudo apt-get install libatlas-base-dev -y
sudo apt-get install libjpeg-dev -y
sudo apt-get install libtiff5-dev -y
sudo apt-get install libpng12-dev -y
sudo apt-get install libavcodec-dev -y
sudo apt-get install libavformat-dev -y
sudo apt-get install libswscale-dev -y
sudo apt-get install libv4l-dev -y
sudo apt-get install libgtk2.0-dev -y
sudo apt-get install libgtk-3-dev -y
sudo apt-get install libavformat-dev -y
sudo apt-get install libswscale-dev -y
sudo apt-get install openexr -y
sudo apt-get install libopenexr-dev -y
sudo apt-get install libqt4-dev -y
sudo apt-get install libgstreamer0.10-0-dbg -y
sudo apt-get install libgstreamer0.10-0 -y
sudo apt-get install libgstreamer0.10-dev -y
sudo apt-get install libgstreamer-plugins-base0.10-dev -y
sudo apt-get install libgstreamer1.0-0 -y
sudo apt-get install libatlas-base-dev -y
sudo apt-get install libhdf5-dev -y
sudo apt-get install libhdf5-serial-dev -y
sudo apt-get install python-opencv -y
sudo apt-get install python3-pip -y
sudo apt-get install mongodb -y
sudo apt-get install nginx -y
sudo apt-get install gunicorn3 -y
sudo apt-get install git -y
sudo apt-get install ufw -y
sudo apt-get install fail2ban -y
# enable nginx and mongo
sudo /etc/init.d/nginx start
sudo systemctl enable mongodb
sudo systemctl start mongodb
# update and upgrade os and packages
sudo apt-get update -y
sudo apt-get full-upgrade -y
# pip3 packages
pip3 install Flask
pip3 install opencv-python==3.4.3.18
pip3 install adafruit-circuitpython-dht
pip3 install rpi-rf
pip3 install pymongo==3.4.0
pip3 install gevent
# reboot
sudo reboot
