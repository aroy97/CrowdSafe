import hashlib
import smtplib
import random
from email.mime.text import MIMEText

from app.models.db_handler import DBHandler


class Notification:
    def __init__(self):
        self.sender = "crowdsafe19@gmail.com"
        self.password = 'a7e6b3efb083618ac515b4038245063b9891f648eac6a8092f8cd35d4426b558'

    def send_mail(self, body, subject, receivers):
        try:
            smtpObj = smtplib.SMTP_SSL('smtp.gmail.com', 465)
            smtpObj.ehlo()
            smtpObj.login('crowdsafe19@gmail.com', 'aoadqomzqxlolhjn')
            print(receivers)
            msg = MIMEText(body)
            msg['From'] = self.sender
            msg['To'] = ','.join(receivers)
            msg['Subject'] = subject
            smtpObj.sendmail(self.sender, receivers, msg.as_string())
            print("Successfully sent email")
        except Exception as e:
            print("Error: unable to send email "+str(e))

    def send_otp_mail(self, receivers):
        otp = str(random.randint(1000, 9999))
        body = "Your OTP for Crowd Safe is " + otp
        subject = 'OTP for Crowd Safe'
        status, res = DBHandler().get_phone(receivers[0])
        if res:
            return "Email Already Exists"
        try:
            self.send_mail(body, subject, receivers)
        except Exception as e:
            otp = None
            return otp
        return self.encrypt_string(otp)

    def send_to_police(self, lat, long):
        body = "Unsafe Corwd Gathering at Latitude: " + lat + " and Longitude: " + long
        subject = 'Unsafe Crowd Gathering Report From Crowd Safe App'
        status = 1
        receivers = ['b.subhayan@yahoo.com']
        try:
            self.send_mail(body, subject, receivers)
        except Exception as e:
            print(str(e))
            status = 0
        return status

    def encrypt_string(self, hash_string):
        sha_signature = \
            hashlib.sha256(hash_string.encode()).hexdigest()
        return sha_signature


if __name__ == "__main__":
    obj = Notification()
    # receiver = obj.get_user_email('8017273846')
    # obj.send_otp_mail([receiver])
