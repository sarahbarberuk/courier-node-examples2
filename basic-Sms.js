const { CourierClient } = require("@trycourier/courier");
const courier = CourierClient({ authorizationToken: "<COURIER_API_KEY>" });

const parcelRef = 'XXXXXXXX';
const startTimeHours = '10';
const startTimeMins = '00';
const endTimeHours = '11';
const endTimeMins = '00';
const rescheduleOrSafePlaceUrl = 'http://example.com/not-in';


const { requestId } = courier.send({
  message: {
  to: {
    phone_number: "<YOUR_PHONE_NUMBER>",
  },
  template: "<NOTIFICATION_TEMNPLATE_ID>",
  data: {
      productName: "productName2",
      orderNumber: "orderNumber2",
    },
  routing: {
        method: "single",
        channels: ["sms"],
  },
  },
});

