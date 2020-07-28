# TortHub
## Author
Deepak Ramalingam

## Description
Tortoise monitoring system with temperature / humidity sensor and night vision camera.

## Requirements for Raspberry Pi 4
* Raspbian Lite (Buster)
* Mongo (https://pimylifeup.com/mongodb-raspberry-pi/)
* NGINX (https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md)
* Python 3 and Pip3 (https://www.raspberrypi.org/documentation/linux/software/python.md)
* OpenCV (3.4.3.18) for Python 3
* Gunicorn3 (sudo apt-get install gunicorn3)

Note: Please reboot the pi after these installations.

## Install Pip Packages (OpenCV < 4.0 Works Best with the Raspberry Pi 4)
```sh
pip3 install Flask
pip3 install opencv-python==3.4.3.18
pip3 install adafruit-circuitpython-dht
pip3 install rpi-rf
pip3 install pymongo
```

## Installations Necessary for OpenCV
```sh
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install libgpiod2
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
```

Note: Please reboot the pi after these installations.
Note: If you are using picamera, make sure that is enabled in raspi-config.

## Connecting the Smart Plugs
Please refer to the following resources:
* https://youtu.be/Xe5Bj_N4Crw
* https://github.com/milaq/rpi-rf

## Auto Start
Create a new service file
```sh
sudo nano /etc/systemd/system/torthubserver.service
```

Add the following content
```sh
[Unit]
Description=TortHub Server Gunicorn Daemon
After=network.target

[Service]
ExecStart=sh launch.sh
WorkingDirectory=/home/pi/TortHub
StandardOutput=inherit
StandardError=inherit
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

## NGINX HTTP Only Config
Edit the default config file

```sh
sudo nano /etc/nginx/sites-enabled/default
```

Replace its contents with the following

```sh
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /var/www/html;

  index index.html index.htm index.nginx-debian.html;

  server_name _;

  location / {
    proxy_pass http://localhost:5000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Restart nginx

```sh
sudo systemctl restart nginx
```

## NGINX HTTPS Config

Use https://www.sslforfree.com/ to generate keys and place the 'certificate.crt' and 'privatet.key' files in the /etc/nginx/ssl/ directory

```sh
server {
    listen 80 default_server;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
  listen       80;
  listen       443 ssl;
  server_name  localhost;

  ssl_certificate  /etc/nginx/ssl/certificate.crt;
  ssl_certificate_key /etc/nginx/ssl/private.key;

  location / {
    proxy_pass http://localhost:5000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```
