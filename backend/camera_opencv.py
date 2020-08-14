import os
import cv2
import numpy
from base_camera import BaseCamera
from datetime import datetime

class Camera(BaseCamera):
    video_source = 1

    def __init__(self):
        if os.environ.get('OPENCV_CAMERA_SOURCE'):
            Camera.set_video_source(int(os.environ['OPENCV_CAMERA_SOURCE']))
        super(Camera, self).__init__()

    @staticmethod
    def set_video_source(source):
        Camera.video_source = source

    @staticmethod
    def frames():
        camera = cv2.VideoCapture(Camera.video_source)
        if not camera.isOpened():
            raise RuntimeError('Could not start camera.')

        while True:
            _, img = camera.read()

            text = datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
            font                    = cv2.FONT_HERSHEY_SIMPLEX
            fontScale               = 1
            whiteColor              = (255,255,255)
            blackColor              = (0, 0, 0)
            thickLine               = 6
            thinLine                = 4

            size = cv2.getTextSize(text, font, 2, 4)[0]
            cv2.putText(img, text, (10,size[1]+10), font, fontScale, blackColor, thickLine)
            cv2.putText(img, text, (10,size[1]+10), font, fontScale, whiteColor, thinLine)

            yield cv2.imencode('.jpg', img)[1].tobytes()
