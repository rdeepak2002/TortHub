import os
import cv2
import numpy
from base_camera import BaseCamera
from datetime import datetime

class CameraNight(BaseCamera):
    video_source = 0

    def __init__(self):
        if os.environ.get('OPENCV_CAMERA_SOURCE'):
            CameraNight.set_video_source(int(os.environ['OPENCV_CAMERA_SOURCE']))
        super(CameraNight, self).__init__()

    @staticmethod
    def set_video_source(source):
        Camera.video_source = source

    @staticmethod
    def frames():
        camera = cv2.VideoCapture(CameraNight.video_source)
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

            text = datetime.now().strftime("Night Vision")

            size = cv2.getTextSize(text, font, 2, 4)[0]
            cv2.putText(img, text, (10,img.shape[0] - (size[1]+10)), font, fontScale, blackColor, thickLine)
            cv2.putText(img, text, (10,img.shape[0] - (size[1]+10)), font, fontScale, whiteColor, thinLine)

            yield cv2.imencode('.jpg', img)[1].tobytes()

class CameraNormal(BaseCamera):
    video_source = 1

    def __init__(self):
        if os.environ.get('OPENCV_CAMERA_SOURCE'):
            CameraNormal.set_video_source(int(os.environ['OPENCV_CAMERA_SOURCE']))
        super(CameraNormal, self).__init__()

    @staticmethod
    def set_video_source(source):
        Camera.video_source = source

    @staticmethod
    def frames():
        camera = cv2.VideoCapture(CameraNormal.video_source)
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

            text = datetime.now().strftime("Normal Camera")

            size = cv2.getTextSize(text, font, 2, 4)[0]
            cv2.putText(img, text, (10,img.shape[0] - (size[1]+10)), font, fontScale, blackColor, thickLine)
            cv2.putText(img, text, (10,img.shape[0] - (size[1]+10)), font, fontScale, whiteColor, thinLine)

            yield cv2.imencode('.jpg', img)[1].tobytes()
