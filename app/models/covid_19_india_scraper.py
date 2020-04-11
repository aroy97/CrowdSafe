import requests
from bs4 import BeautifulSoup
import json


class WebScraper:
    def get_raw_data(self, url="https://api.covid19india.org/data.json"):
        response = requests.get(url)
        return json.loads(response.content)

    def get_statewise_data(self):
        status = 1
        data = list()
        try:
            raw_data = self.get_raw_data()
            state_code_map = self.get_state_codes(self.process_state_code_data())
            for state_data in raw_data['statewise']:
                if state_data['state'].strip().lower() == 'total':
                    processed_state_data = {"id": "000", "infected": state_data['confirmed'],
                                            "active": state_data['active'],
                                            "deaths": state_data['deaths'], "recovered": state_data['recovered']}
                    data.append(processed_state_data)
                elif state_data['state'].strip().lower() == 'jammu and kashmir':
                    processed_state_data_temp = {"id": "000", "infected": state_data['confirmed'],
                                                 "active": state_data['active'],
                                                 "deaths": state_data['deaths'], "recovered": state_data['recovered']}
                elif state_data['state'].strip().lower() == 'ladakh':
                    sid = [x for x in state_code_map if
                           state_code_map[x][1].strip().lower() == "jammu and kashmir"]
                    infected = int(state_data['confirmed']) + int(processed_state_data_temp['infected'])
                    active = int(state_data['active']) + int(processed_state_data_temp['active'])
                    deaths = int(state_data['deaths']) + int(processed_state_data_temp['deaths'])
                    recovered = int(state_data['recovered']) + int(processed_state_data_temp['recovered'])
                    processed_state_data = {"id": sid[0], "infected": str(infected),
                                            "active": str(active),
                                            "deaths": str(deaths), "recovered": str(recovered)}
                    data.append(processed_state_data)
                else:
                    sid = [x for x in state_code_map if
                           state_code_map[x][1].strip().lower() == state_data['state'].strip().lower()]
                    processed_state_data = {"id": sid[0], "infected": state_data['confirmed'],
                                            "active": state_data['active'],
                                            "deaths": state_data['deaths'], "recovered": state_data['recovered']}
                    data.append(processed_state_data)
        except Exception as e:
            data = str(e)
            status = 0
        return status, data

    def get_state_codes(self, content):
        soup = BeautifulSoup(content, 'html.parser')
        div = soup.find('div', attrs={'class': 'map-body'})
        table = div.find('table')
        tbody = div.find('tbody')
        state_code_map = {}
        for row in tbody.findAll('tr'):
            i = 1
            sid = ''
            for cell in row.findAll('td'):
                if i % 3 == 0 or i % 2 == 0:
                    state_code_map[sid].append(cell.text)
                else:
                    sid = cell.text
                    state_code_map[sid] = list()
                i += 1
        return state_code_map

    def process_state_code_data(self, url="https://www.fusioncharts.com/dev/maps/spec-sheets/india"):
        response = requests.get(url)
        return response.content


if __name__ == "__main__":
    obj = WebScraper()
    content = obj.process_state_code_data()
    state_code_map = obj.get_state_codes(content)
    raw_data = obj.get_raw_data()
    print(obj.get_statewise_data())
