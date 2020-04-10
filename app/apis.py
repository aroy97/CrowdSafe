import http

from flask import Flask, request

from app.db_handler import DBHandler

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/register", methods=['POST'])
def register():
    payload = request.get_json()
    status = DBHandler().register(payload['user'], payload['password'])
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
        response = ({'Token': result[1]}, http.HTTPStatus.OK)
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


if __name__ == '__main__':
    table_name = 'user'
    parameters = ['phone VARCHAR(10) PRIMARY KEY', 'password VARCAHR(256) NOT NULL, token INT']
    DBHandler().create_table(table_name, parameters)
    app.run()
