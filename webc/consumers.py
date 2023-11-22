import json 
from random import randint 
from asyncio import sleep
from channels.generic.websocket import WebsocketConsumer,AsyncWebsocketConsumer

from datetime import datetime 
import pytz 

class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        for i in range(1000):
            IST = pytz.timezone('Asia/Kolkata') 

            datetime_ist = datetime.now(IST) 
            # print(datetime_ist.strftime('%H:%M:%S')) 
            await self.send(json.dumps({'value1':randint(-20,20),'value2': randint(-20,20),'value3': randint(-20,20),'currtime':(datetime_ist.strftime('%H:%M:%S'))}))
            await sleep(0.5)


