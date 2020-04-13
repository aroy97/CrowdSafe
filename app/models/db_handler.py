import hashlib
import sqlite3
import math
import matplotlib.path as mpltPath
import numpy as np
from app.models.covid_19_india_scraper import WebScraper


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

    def insert_value(self, table_name, parameters):
        parameters = '","'.join(parameters)
        parameters = '"' + parameters + '"'
        query = 'INSERT INTO ' + table_name + ' VALUES (' + parameters + ');'
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

    def register(self, phone, name, pass_hash):
        token = 5
        query = 'INSERT INTO user(phone, name, password, token) VALUES ("' + phone + '","' + name + '","' + pass_hash \
                + '","' + str(token) + '"); '
        status = 1
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
        return status

    def login(self, phone, pass_hash):
        status = 1
        result = "No Data"
        query = 'SELECT password, token, name FROM user WHERE phone = "' + phone + '";'
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
            return status, result
        rows = self.cursor.fetchall()
        for row in rows:
            result = (row[0], row[1], row[2])
        if str(result[0]) == pass_hash:
            return status, result
        else:
            return 5, "No Data"

    def increment_token(self, phone):
        status = 1
        query = 'UPDATE user SET token = token + 1 WHERE name = "' + phone + '";'
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
        return status

    def decrement_token(self, phone):
        status = 1
        query = 'UPDATE user SET token = token - 2 WHERE name = "' + phone + '";'
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
        return status

    def get_phone(self, name):
        status = 1
        result = None
        query = 'SELECT phone FROM user WHERE name = "' + name + '";'
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
            return status, result
        rows = self.cursor.fetchall()
        print(rows, result)
        for row in rows:
            result = row[0]
        return status, result

    def update_heatmap_state(self, lat, long, weight):
        rows = self.get_heatmap()
        weight_updated = 0
        flag = 0
        state = ''
        status = 0
        result = None
        for row in rows[1]:
            if not row['Name']:
                continue
            if lies_in(row['Latitude'].split(','), row['Longitude'].split(','), lat, long):
                state = row['Name']
                weight_updated = int(row['Weight'])
                flag = 1
                break
        if flag:
            weight_updated += int(weight)
            query = 'UPDATE heatmap_new SET weight = "' + str(weight_updated) + '" WHERE state= "' + state + '";'
            status = 1
            result = None
            try:
                self.execute_query(query)
                result = "Successful"
            except ConnectionError:
                status = 0
        return status, result

    def get_heatmap_state_data(self):
        query = 'SELECT * from heatmap_new;'
        status = 1
        result = None
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
            return status, result
        rows = self.cursor.fetchall()
        result = []
        for row in rows:
            result.append({'Name': row[0], 'Latitude': row[1], 'Longitude': row[2], 'Weight': row[3]})
        return status, result

    def get_heatmap_state(self):
        status = 1
        data = list()
        try:
            status, raw_data = self.get_heatmap_state_data()
            state_code_map = WebScraper().get_state_codes(WebScraper().process_state_code_data())
            print(state_code_map)
            for state_data in raw_data:
                if not state_data['Name'] or state_data['Name'] == 'Uttaranchal':
                    continue
                elif state_data['Name'] == 'Andaman and Nicobar':
                    state_data['Name'] += ' Islands'
                elif state_data['Name'] == 'Orissa':
                    state_data['Name'] = 'Odisha'
                sid = [x for x in state_code_map if
                           state_code_map[x][1].strip().lower() == state_data['Name'].strip().lower()]
                print(state_data['Name'], sid)
                processed_state_data = {"id": sid[0], "weight": state_data['Weight']}
                data.append(processed_state_data)
        except Exception as e:
            print(str(e))
            data = str(e)
            status = 0
        return status, data

    def get_heatmap(self):
        query = 'SELECT * from heatmap;'
        status = 1
        result = None
        try:
            self.execute_query(query)
        except ConnectionError:
            status = 0
            return status, result
        rows = self.cursor.fetchall()
        result = []
        for row in rows:
            result.append({'Latitude': row[0], 'Longitude': row[1], 'Weight': row[2]})
        return status, result

    def set_database(self):
        with open('./app/images/district.txt', 'r') as f:
            lines = f.readlines()
        prev_state = ""
        lat = ""
        long =""
        print(lines)
        for line in lines:
            line = line.split(',')
            if line[0] == prev_state:
                lat += ','+line[2]
                long += ',' + line[3].strip()
            else:
                params = [str(prev_state), str(lat), str(long), "0"]
                DBHandler().insert_value('heatmap_new', params)
                prev_state = line[0]
                lat = line[2]
                long = line[3].strip()
        params = [str(prev_state), str(lat), str(long), "0"]
        DBHandler().insert_value('heatmap_new', params)


def calc_distance(x1, x2, y1, y2):
    x1, x2, y1, y2 = float(x1), float(x2), float(y1), float(y2)
    return math.sqrt((x1-x2)**2 + (y1-y2)**2)


def lies_in(lat_list, long_list, lat, long):
    point = [[float(long), float(lat)]]
    points = ccw_sort([(float(y), float(x)) for x, y in zip(lat_list, long_list)])
    polygon = [[x[0], x[1]] for x in points]
    path = mpltPath.Path(polygon)
    return path.contains_points(point)


def encrypt_string(hash_string):
    sha_signature = \
        hashlib.sha256(hash_string.encode()).hexdigest()
    return sha_signature


def ccw_sort(p):
    p = np.array(p)
    mean = np.mean(p,axis=0)
    d = p-mean
    s = np.arctan2(d[:,0], d[:,1])
    return p[np.argsort(s),:]


# if __name__ == '__main__':
#     lat_list = [0, 0, 1, 1]
#     long_list = [0, 1, 0, 1]
#     lat, long = 0.5, 1.5
#     print(lies_in(lat_list, long_list, lat, long))
#
#     set_database()
    # obj = DBHandler()
    #
    # table_name = 'heatmap_new'
    # parameters = ["state VARCHAR(20) PRIMARY KEY", "lat VARCHAR(10) NOT NULL", "long VARCHAR(10) NOT NULL", "weight VARCAHR(10) NOT NULL"]
    # print(obj.create_table(table_name, parameters))
#     phone = '8017273846'
#     password = 'Mar@1234'
#     password = encrypt_string(password)
#     status = obj.register(phone, password)
#     print(status)
#     status, result = obj.login(phone, password)
#     if status == 1:
#         print(result)
#     status = obj.increment_token(phone)
#     print(status)
#     status, result = obj.login(phone, password)
#     if status == 1:
#         print(result)
#     status = obj.decrement_token(phone)
#     print(status)
#     status, result = obj.login(phone, password)
#     if status == 1:
#         print(result)
