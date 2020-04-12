import http
import json

from app.models.image_processing import ImageView
from app.models.notification_service import Notification
from flask_cors import CORS
from flask import Flask, request
from flask_basicauth import BasicAuth

from app.models.covid_19_india_scraper import WebScraper
from app.models.db_handler import DBHandler

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


@app.route("/get_images", methods=['POST'])
def get_images():
    payload = request.get_json()
    status, message = ImageView(payload['video_string']).process_image()
    if status == 0:
        response = ({'Error': message}, http.HTTPStatus.CONFLICT)
    else:
        response = ({'Message': message}, http.HTTPStatus.OK)
    return response


@app.route("/send_otp", methods=['POST'])
def send_otp():
    payload = request.get_json()
    otp = Notification().send_otp_mail([payload['name']])
    if otp:
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

# if __name__ == '__main__':
#     table_name = 'user'
#     parameters = ['phone VARCHAR(10) PRIMARY KEY', 'name TEXT NOT NULL', 'password VARCAHR(256) NOT NULL', 'token INT']
#     DBHandler().create_table(table_name, parameters)
#     app.run()
