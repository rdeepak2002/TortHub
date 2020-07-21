import os
import cv2
import numpy
from base_camera import BaseCamera
from datetime import datetime

class Camera(BaseCamera):
    video_source = 0

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

        # face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

        while True:
            # read current frame
            _, img = camera.read()

            # uncomment for face detection
            # gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            # Detect the faces
            # faces = face_cascade.detectMultiScale(gray, 1.4, 4)
            # Draw the rectangle around each face
            # for (x, y, w, h) in faces:
            #     cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)

            text = datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
            font                    = cv2.FONT_HERSHEY_SIMPLEX
            fontScale               = 2
            whiteColor              = (255,255,255)
            blackColor              = (0, 0, 0)
            thickLine               = 6
            thinLine                = 4

            size = cv2.getTextSize(text, font, 2, 4)[0]
            cv2.putText(img, text, (10,size[1]+10), font, fontScale, blackColor, thickLine)
            cv2.putText(img, text, (10,size[1]+10), font, fontScale, whiteColor, thinLine)

            # cv2.putText(img, datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
            #     bottomLeftCornerOfText,
            #     font,
            #     fontScale*1.1,
            #     blackColor,
            #     lineType)
            #
            # cv2.putText(img, datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
            #     bottomLeftCornerOfText,
            #     font,
            #     fontScale,
            #     whiteColor,
            #     lineType)

            # encode as a jpeg image and return it
            yield cv2.imencode('.jpg', img)[1].tobytes()
