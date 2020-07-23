cd /home/pi/TortHub
sudo cp torthub.service /etc/systemd/system/torthub.service
sudo systemctl start torthub.service
sudo systemctl enable torthub.service
