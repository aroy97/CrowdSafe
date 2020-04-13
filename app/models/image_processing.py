import base64
import uu
import cv2


class ImageView:

    def __init__(self, video_string):
        with open('./app/images/video.mp4', 'wb') as wfile:
            wfile.write(base64.decodebytes(bytes(video_string, 'utf-8')))
        # uu.decode('./app/images/video2.txt', './app/images/video.mp4')
        self.vidcap = cv2.VideoCapture('./app/images/video.mp4')

    def getFrame(self, sec, count):
        self.vidcap.set(cv2.CAP_PROP_POS_MSEC, sec * 1000)
        hasFrames, image =self.vidcap.read()
        if hasFrames:
            cv2.imwrite("./app/images/image." + str(count) + ".jpg", image)  # save frame as JPG file
        return hasFrames

    def process_image(self):
        status = 1
        message = "successful"
        sec = 0
        frameRate = 30  # //it will capture image in each 30 second
        count = 1
        try:
            success = self.getFrame(sec, count)
            while success:
                count = count + 1
                sec = sec + frameRate
                sec = round(sec, 2)
                success = self.getFrame(sec, count)
        except Exception as e:
            message = str(e)
            status = 0
        return status, message


# if __name__ == "__main__":
#     filepath = r"C:\Users\HP\Downloads\video.mp4"
#     uu.encode(filepath, '../images/video.txt')
#     video_string = ""
#     with open('../images/video.txt', 'r') as f:
#         data = f.readlines()
#     video_string = ''.join(data)
#     # print("video string", video_string)
#     iv = ImageView(video_string)
#     iv.process_image()