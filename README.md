# TortHub
## Author
Deepak Ramalingam

## Description
Tortoise monitoring system with temperature / humidity sensor and night vision camera.

## Installation (Raspbian Buster)
```sh
./install-all.sh
```
If you are using PiCamera instead of a USB Camera, make sure that is enabled in raspi-config.

## Connecting the Smart Plugs
Refer to the following resources and edit the source code in /backend/app.py
* https://youtu.be/Xe5Bj_N4Crw
* https://github.com/milaq/rpi-rf

## Auto Start
Create a new service file

```sh
sudo nano /etc/systemd/system/torthubserver.service
```

Copy and paste the contents of the torthubserver.service file

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

Restart nginx

```sh
sudo systemctl restart nginx
```
