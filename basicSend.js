const { CourierClient } = require("@trycourier/courier");
const courier = CourierClient({ authorizationToken: "<COURIER_API_KEY" });


const { requestId } = courier.send({
  message: {
    to: {
      data: {
        name: "John Doe",
        date: "27 July 2023",
        time: "10:00",
        place: "Salon A",
        salonName: "Cutting Edge",
      },
      email: "<EMAIL_ADDRESS>",
    },
    content: {
      title: "Tax deadline reminder",
      body: "Dear {name},  This email is to confirm your upcoming hair appointment on {date} at {time}.   We look forward to seeing you at {place}. Please arrive 5 minutes before your appointment start time.  If you need to reschedule, please let us know at least 24 hours prior to your appointment time.  Thank you for your appointment.  The {salonName} Team"
    },
    routing: {
      method: "single",
      channels: ["email"],
    },
  },
});