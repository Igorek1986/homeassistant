import datetime
import re
import appdaemon.plugins.hass.hassapi as hass
import time
import librouteros
from librouteros.login import plain, token

class Mikrotik(hass.Hass):
    def initialize(self):
        self.log("App Mikrotik")
        self.handles = {}
        self.run_every(self.update, datetime.datetime.now(), 10)

        self.api = librouteros.connect(self.args["host"], self.args["username"], self.args["password"])
        self.listen_event(self.state_change, event = "call_service")

    def update_addr_list(self):
        lst = self.args["addrlist"]
        lists = self.api("/ip/firewall/address-list/print")
        for row in lists:
            if row["list"] != lst:
                continue
            addr_id = row[".id"]
            sensor_name = "switch.block_inet_" + re.sub(r"\W ", "", row["comment"], flags=re.I).replace(" ", "_")
            self.log("sensor_name: {}".format(sensor_name))
            sensor_name = sensor_name.lower()
            self.handles[sensor_name] = row
            self.handles[sensor_name]["addr_id"] = addr_id

    def update(self, kwargs):
        self.update_addr_list()
        for row in self.handles:
            state = "on"
            if self.handles[row]["disabled"] == True:
                state = "off"
            self.set_state(row, state = state, attributes = {"friendly_name": self.handles[row]["comment"], "address": self.handles[row]["address"], 'list': self.handles[row]["list"], 'icon': "mdi:earth", "addr_id": self.handles[row]["addr_id"]})

    def state_change(self, event_name, data, kwargs):
        entity = data["service_data"]["entity_id"]
        if(data["service"] == "turn_on" and entity in self.handles):
            self.set_list_state(False, self.handles[entity]["addr_id"])
        if(data["service"] == "turn_off" and entity in self.handles):
            self.set_list_state(True, self.handles[entity]["addr_id"])

    def set_list_state(self, state, addr_id):
        params = {"disabled": state, ".id": addr_id}
        t = self.api("/ip/firewall/address-list/set", **params)
        tuple(t)
        self.update(None)

    # def callback(self, kwargs):
        # api = connect(username=self.user, password=self.passw, host=self.ip_address[0])
        # info_eth = api(cmd="/interface/print")
        # for eth in info_eth:
            # sensor_name = 'binary_sensor.mikrotik_'   re.sub(r"\W", "", eth['name'], flags=re.I)
            # eth['device_class'] = 'connectivity'
            # state = "off"
            # if eth['running'] is True:
                # state = 'on'
            # self.set_state(sensor_name, state=state, attributes=eth)
            # self.log(eth)
        # info_system = api(cmd="/system/resource/print")
        # self.set_state('sensor.mikrotik_info', state='running', attributes=info_system[0])
        # info_ddns = api(cmd="/ip/cloud/print")
        # self.set_state('sensor.mikrotik_ddns', state=info_ddns[0]['public-address'], attributes=info_ddns[0])


        
# import datetime
# import re
# import appdaemon.plugins.hass.hassapi as hass
# import time
# import librouteros
# from librouteros.login import plain, token

# class Mikrotik(hass.Hass):
    # def initialize(self):
        # self.log("Mikrotik")
        # self.handles = {}
        # self.run_every(self.update, datetime.datetime.now(), 10)
        # self.api = librouteros.connect(self.args["host"], self.args["username"], self.args["password"])
        # self.listen_event(self.state_change, event = "call_service")

    # def update_addr_list(self):
        # lst = self.args["addrlist"]
        # lists = self.api('/ip/firewall/address-list/print')
        # for row in lists:
            # if row['list'] != lst:
                # continue
            # addr_id = row['.id']
            # sensor_name = 'switch.mtk_al_' + re.sub(r"\W ", "", row['comment'], flags=re.I).replace(" ", "_")
            # self.log('sensor_name: {}'.format(sensor_name))
            # sensor_name = sensor_name.lower()
            # self.handles[sensor_name] = row
            # self.handles[sensor_name]['addr_id'] = addr_id

    # def update(self, kwargs):
        # self.update_addr_list()
        # for row in self.handles:
            # state = "off"
            # if self.handles[row]['disabled'] == True:
                # state = "on"
            # self.set_state(row, state = state, attributes = {"friendly_name": self.handles[row]['comment'], "address": self.handles[row]['address'], 'list': self.handles[row]['list'], 'icon': 'mdi:earth', 'addr_id': self.handles[row]['addr_id']})

    # def state_change(self, event_name, data, kwargs):
        # entity = data["service_data"]["entity_id"]
        # if(data["service"] == "turn_off" and entity in self.handles):
            # self.set_list_state(False, self.handles[entity]['addr_id'])
        # if(data["service"] == "turn_on" and entity in self.handles):
            # self.set_list_state(True, self.handles[entity]['addr_id'])

    # def set_list_state(self, state, addr_id):
        # params = {'disabled': state, '.id': addr_id}
        # t = self.api('/ip/firewall/address-list/set', **params)
        # tuple(t)
        # self.update(None)