require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 4000; 

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;

// Recipient email (Replace with your actual recipient email)
const recipientEmail = 'your_recipient_email@example.com';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Or your email provider
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
});

// Middleware
app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all origins (adjust as needed)

// API Endpoint for Handling Maintenance Requests
app.post('/submit-maintenance', async (req, res) => {
  try {
    const { unitNo, room, problem, urgency, email } = req.body;

    const mailOptions = {
      from: emailUser,
      to: recipientEmail, 
      cc: email,  // Include the user's email in CC
      subject: 'Maintenance Request',
      text: `New Maintenance Request Received:\n\nUnit: ${unitNo}\nRoom: ${room}\nProblem: ${problem}\nUrgency: ${urgency}\n\nSubmitted by: ${email}`, // Include user's email in the message
    };

    await transporter.sendMail(mailOptions); // Send the email

    res.json({ success: true, message: 'Maintenance request submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to submit request. Please try again later.' });
  }
});

app.post('/book-tour', async (req, res) => {
  try {
    const { firstName, lastName, date, phoneNo, visitors } = req.body;

    const mailOptions = {
      from: emailUser,
      to: recipientEmail, 
      subject: 'New Tour Booking Request',
      text: 
`${firstName} ${lastName} wants to visit on ${date}.
Their phone number is ${phoneNo}. 
Number of visitors: ${visitors}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Tour booked successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to book tour. Please try again later.' });
  }
});


// Start the Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
