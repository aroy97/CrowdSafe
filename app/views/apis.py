import base64
import http
import json
import random
import os
from app.models.image_processing import ImageView
from app.models.notification_service import Notification
from flask_cors import CORS
from flask import Flask, request
from flask_basicauth import BasicAuth

from app.models.covid_19_india_scraper import WebScraper
from app.models.db_handler import DBHandler
from object_detection.model import ObjectDetection

app = Flask(__name__)
CORS(app)
app.config['BASIC_AUTH_USERNAME'] = 'Covid19'
app.config['BASIC_AUTH_PASSWORD'] = 'Covid19'
#app.config['BASIC_AUTH_FORCE'] = True
#basic_auth = BasicAuth(app)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/create_table", methods=['POST'])
def create_table():
    payload = request.get_json()
    status = DBHandler().create_table(payload['table_name'], payload['parameters'])
    if status == 0:
        response = ({'Error': 'Could Not Create Table'}, http.HTTPStatus.CONFLICT)
    else:
        response = ({'Message': 'Table Created Successfully'}, http.HTTPStatus.CREATED)
    return response


@app.route("/insert_data", methods=['POST'])
def insert_data():
    payload = request.get_json()
    status = DBHandler().insert_value(payload['table_name'], payload['parameters'])
    if status == 0:
        response = ({'Error': 'Could Not Insert Data'}, http.HTTPStatus.CONFLICT)
    else:
        response = ({'Message': 'Data Inserted Successfully'}, http.HTTPStatus.OK)
    return response


@app.route("/register", methods=['POST'])
def register():
    payload = request.get_json()
    status = DBHandler().register(payload['user'], payload['name'], payload['password'])
    if status == 0:
        response = ({'Error': 'Could Not Register'}, http.HTTPStatus.CONFLICT)
    else:
        response = ({'Message': 'Registered Successfully'}, http.HTTPStatus.CREATED)
    return response


@app.route("/login", methods=['POST'])
def login():
    payload = request.get_json()
    status, result = DBHandler().login(payload['user'], payload['password'])
    if status == 0:
        response = ({'Error': 'Could Not Fetch Data'}, http.HTTPStatus.CONFLICT)
    elif status == 5:
        response = ({'Error': 'User Not Present'}, http.HTTPStatus.NO_CONTENT)
    else:
        response = ({'Name': result[2], 'Token': result[1]}, http.HTTPStatus.OK)
    return response


@app.route("/increment_token", methods=['POST'])
def increment_token():
    payload = request.get_json()
    status = DBHandler().increment_token(payload['user'])
    if status == 0:
        response = ({'Error': 'Cannot Increment Token'}, http.HTTPStatus.CONFLICT)
    else:
        response = ({'Message': 'Token Incremented Successfully'}, http.HTTPStatus.OK)
    return response


@app.route("/decrement_token", methods=['POST'])
def decrement_token():
    payload = request.get_json()
    status = DBHandler().decrement_token(payload['user'])
    if status == 0:
        response = ({'Error': 'Cannot Decrement Token'}, http.HTTPStatus.CONFLICT)
    else:
        response = ({'Message': 'Token Decremented Successfully'}, http.HTTPStatus.OK)
    return response


@app.route("/state_data", methods=['GET'])
def state_data():
    status, data = WebScraper().get_statewise_data()
    if status == 0:
        response = ({'Error': data}, http.HTTPStatus.CONFLICT)
    else:
        response = (json.dumps(data), http.HTTPStatus.OK)
    return response


@app.route("/crowd_detection_video", methods=['POST'])
def crowd_detection_video():
    payload = request.get_json()
    status, message = ImageView(payload['video_string']).process_image()
    if status == 0:
        response = ({'Error': message}, http.HTTPStatus.CONFLICT)
    else:
        filepath = './app/images/'
        ob = ObjectDetection(filepath)
        person_count = max(ob.driver())
        status = DBHandler().insert_value('heatmap', [str(payload['lat']), str(payload['long']), str(person_count)])
        if status:
            response = ({'Person Count': str(person_count)}, http.HTTPStatus.OK)
        else:
            response = ({'Message': 'Could not update Database'}, http.HTTPStatus.CONFLICT)
        for file in os.listdir(filepath):
            if file.endswith('.jpg'):
                os.remove(filepath+file)
    return response


@app.route("/send_otp", methods=['POST'])
def send_otp():
    payload = request.get_json()
    otp = Notification().send_otp_mail([payload['name']])
    if otp:
        if otp == 'Email Already Exists':
            response = ({'OTP': otp}, http.HTTPStatus.CONFLICT)
        else:
            response = ({'OTP': otp}, http.HTTPStatus.OK)
    else:
        response = ({'Error': 'Otp Not Generated'}, http.HTTPStatus.CONFLICT)
    return response


@app.route("/send_to_police", methods=['POST'])
def send_to_police():
    payload = request.get_json()
    status = Notification().send_to_police(payload['lat'], payload['long'])
    if status == 0:
        response = ({'Error': 'Mail Not Sent'}, http.HTTPStatus.CONFLICT)
    else:
        response = ({'Message': 'Mail Sent'}, http.HTTPStatus.OK)
    return response


@app.route("/crowd_detection", methods=['POST'])
def crowd_detection():
    payload = request.get_json()
    image_string = payload['image']
    randint = random.randint(100000, 999999)
    filename = 'app/images/tmpImage' + str(randint) + '.jpg'
    response = ({'Message': 'Processing'}, http.HTTPStatus.OK)
    try:
        with open(filename, "wb") as fh:
            fh.write(base64.decodebytes(bytes(image_string, 'utf-8')))
        ob = ObjectDetection(filename[:filename.rfind('/')])
        person_count = max(ob.driver())
        status = DBHandler().insert_value('heatmap', [str(payload['lat']), str(payload['long']), str(person_count)])
        if status:
            response = ({'Person Count': str(person_count)}, http.HTTPStatus.OK)
        else:
            response = ({'Message': 'Could not update Database'}, http.HTTPStatus.CONFLICT)
        os.remove(filename)
    except Exception as e:
        os.remove(filename)
        response = ({'Error': 'Error'}, http.HTTPStatus.CONFLICT)
    return response


@app.route("/get_heatmap_state", methods=['GET'])
def get_heatmap_state():
    status, data = DBHandler().get_heatmap_state()
    if status == 0:
        response = ({'Error': data}, http.HTTPStatus.CONFLICT)
    else:
        response = (json.dumps(data), http.HTTPStatus.OK)
    return response


@app.route("/get_heatmap", methods=['GET'])
def get_heatmap():
    status, data = DBHandler().get_heatmap()
    if status == 0:
        response = ({'Error': data}, http.HTTPStatus.CONFLICT)
    else:
        response = (json.dumps(data), http.HTTPStatus.OK)
    return response


@app.route("/update_heatmap_state", methods=['POST'])
def update_heatmap_state():
    payload = request.get_json()
    status, data = DBHandler().update_heatmap_state(payload['lat'], payload['long'], payload['weight'])
    if data:
        response = ({'Message': data}, http.HTTPStatus.OK)
    else:
        response = ({'Error': data}, http.HTTPStatus.CONFLICT)
    return response


@app.route("/delete", methods=['GET'])
def delete():
    obj = DBHandler()
    obj.execute_query('DELETE FROM  user')
    return "True"


@app.route("/set_database", methods=['GET'])
def set_database():
    obj = DBHandler()
    obj.set_database()
    return "True"


# if __name__ == '__main__':
#     table_name = 'user'
#     parameters = ['phone VARCHAR(10) PRIMARY KEY', 'name TEXT NOT NULL', 'password VARCAHR(256) NOT NULL', 'token INT']
#     DBHandler().create_table(table_name, parameters)
#     app.run()
