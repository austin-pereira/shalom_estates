const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 4000;

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Ensure your Twilio phone number starts with '+'
const ownerPhoneNumber = '+919323162131'; // Business owner's phone number, hardcoded

// Initialize twilio client
const client = new twilio(accountSid, authToken);

app.use(bodyParser.json()); // Support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies

// POST endpoint for maintenance requests
app.post('/send-sms', async (req, res) => {
    const { unitNo, room, problem, urgency, phoneNumber } = req.body;
    const messageBody = `Maintenance Request from Unit ${unitNo}, Room: ${room}. Problem: ${problem}. Urgency: ${urgency}.`;
    const formattedPhoneNumber = `+91${phoneNumber}`; // Automatically prepend +91 to phone numbers

    try {
        // Sending SMS message to the resident
        const messageResident = await client.messages.create({
            body: messageBody,
            to: formattedPhoneNumber,
            from: twilioPhoneNumber
        });

        // Sending SMS message to the business owner
        const messageOwner = await client.messages.create({
            body: messageBody,
            to: ownerPhoneNumber,
            from: twilioPhoneNumber
        });

        res.json({
            message: 'Messages sent successfully!',
            details: {
                residentMessageId: messageResident.sid,
                ownerMessageId: messageOwner.sid
            }
        });
    } catch (error) {
        console.error('Failed to send message:', error);
        res.status(500).json({ error: `Error sending message: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
