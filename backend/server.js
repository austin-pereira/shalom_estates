const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Initialize twilio client
const client = new twilio(accountSid, authToken);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// POST endpoint for maintenance requests
app.post('/send-sms', (req, res) => {
    const { unitNo, room, problem, urgency, userPhoneNumber } = req.body;

    const messageBody = `Maintenance Request from Unit ${unitNo}, Room: ${room}. Problem: ${problem}. Urgency: ${urgency}.`;

    // Sending SMS via Twilio
    client.messages
        .create({
            body: messageBody,
            to: userPhoneNumber,  // Text this number
            from: twilioPhoneNumber // From a valid Twilio number
        })
        .then((message) => res.send(`Message sent! Message SID: ${message.sid}`))
        .catch((error) => res.status(500).send(`Error: ${error.message}`));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
