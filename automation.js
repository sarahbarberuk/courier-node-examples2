const { CourierClient } = require("@trycourier/courier");
const courier = CourierClient({ authorizationToken: "<COURIER_API_KEY>" }); 

const fetch = require('node-fetch');


const options = {

  method: 'POST',

  headers: {

    Accept: 'application/json',

    'Content-Type': 'application/json',

    Authorization: 'Bearer replace-token'

  },

  body: JSON.stringify(

   {"automation": {
    "steps": [
      {
        "action": "send",
        "recipient": "<COURIER_USER_ID>",
        "template": "<NOTIFICATION_TEMPLATE_ID>", //Hair appointment reminder
        "brand": "<BRAND_ID>",
        "data": {
            "name": "John Doe"
        }
      },
      {
        "action": "delay",
        "duration": "2 minutes"
      },
      {
        "action": "send",
        "recipient": "<COURIER_USER_ID>",
        "template": "<NOTIFICATION_TEMPLATE_ID>", //Hair appointment - 10% off
        "brand": "<BRAND_ID>",
        "data": {
            "name": "John Doe"
        }
      }
  ]
  }
}

  )

};


fetch('https://api.courier.com/automations/invoke', options)

  .then(response => response.json())

  .then(response => console.log(response))

  .catch(err => console.error(err))