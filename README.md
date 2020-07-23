# TortHub
## Author
Deepak Ramalingam

## Requirements for Raspberry Pi 4 (Buster)
* python3
* pip3 install from requirements.txt
* The following must be installed on the system:
  * sudo apt-get install libatlas-base-dev
  * sudo apt-get install libjasper-dev
  * sudo apt-get install libqtgui4
  * sudo apt-get install python3-pyqt5
  * sudo apt-get install libqt4-test
  * sudo apt install python3-gunicorn

```sh

```

## Autostart

On a Raspberry Pi 4 run the following command:

```sh
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```

Then add the following line:

```sh
@lxterminal -e /home/pi/HomeHub/start.sh
```
