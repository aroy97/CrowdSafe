import http
import json
from flask_cors import CORS
from flask import Flask, request
from flask_basicauth import BasicAuth

from app.models.covid_19_india_scraper import WebScraper
from app.models.db_handler import DBHandler

app = Flask(__name__)
CORS(app)
app.config['BASIC_AUTH_USERNAME'] = 'Covid19'
app.config['BASIC_AUTH_PASSWORD'] = 'Covid19'
app.config['BASIC_AUTH_FORCE'] = True
basic_auth = BasicAuth(app)


@app.route("/")
def hello():
    return "Hello World!"


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


if __name__ == '__main__':
    table_name = 'user'
    parameters = ['phone VARCHAR(10) PRIMARY KEY', 'name TEXT NOT NULL', 'password VARCAHR(256) NOT NULL', 'token INT']
    DBHandler().create_table(table_name, parameters)
    app.run()
