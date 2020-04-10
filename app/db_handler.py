import hashlib
import sqlite3


class DBHandler:
    def __init__(self):
        try:
            self.db = sqlite3.connect('CrowdSafe.db')
            self.cursor = self.db.cursor()
        except ConnectionError:
            raise ConnectionError
        except Exception as e:
            print(str(e))
            raise e

    def create_table(self, table_name, parameters):
        parameters = ','.join(parameters)
        query = 'CREATE TABLE IF NOT EXISTS ' + table_name + '(' + parameters + ');'
        status = 1
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
        return status

    def execute_query(self, query):
        try:
            self.cursor.execute(query)
            self.db.commit()
        except Exception as e:
            print(str(e))
            self.db.rollback()
            raise ConnectionError

    def register(self, phone, pass_hash):
        token = 0
        query = 'INSERT INTO user(phone, password, token) VALUES ("' + phone + '","' + pass_hash + '","' + str(token) + '");'
        status = 1
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
        return status

    def login(self, phone, pass_hash):
        status = 1
        result = "No Data"
        query = 'SELECT password, token FROM user;' # WHERE phone = "' + phone + '";'
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
            return status, result
        rows = self.cursor.fetchall()
        for row in rows:
            result = (row[0], row[1])
        if result[0] == pass_hash:
            return status, result
        else:
            return 0, "No Data"

    def increment_token(self, phone):
        status = 1
        query = 'UPDATE user SET token = token + 1 WHERE phone = "' + phone + '";'
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
        return status

    def decrement_token(self, phone):
        status = 1
        query = 'UPDATE user SET token = token - 2 WHERE phone = "' + phone + '";'
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
        return status


def encrypt_string(hash_string):
    sha_signature = \
        hashlib.sha256(hash_string.encode()).hexdigest()
    return sha_signature


if __name__ == '__main__':
    obj = DBHandler()

    table_name = 'user'
    parameters = ['phone VARCHAR(10) PRIMARY KEY', 'password VARCAHR(256) NOT NULL, token INT']
    obj.create_table(table_name, parameters)
    phone = '8017273846'
    password = 'Mar@1234'
    password = encrypt_string(password)
    status = obj.register(phone, password)
    print(status)
    status, result = obj.login(phone, password)
    if status == 1:
        print(result)
    status = obj.increment_token(phone)
    print(status)
    status, result = obj.login(phone, password)
    if status == 1:
        print(result)
    status = obj.decrement_token(phone)
    print(status)
    status, result = obj.login(phone, password)
    if status == 1:
        print(result)
