import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get In Touch</h2>
        <p>9F3W+FF5, Chikkamagaluru - Sringeri Road,</p>
        <p>Jayapura, Koppa Taluk, 577123</p>

        <p>Phone No: 9323162131</p>
        <p>Email Address: anilpereira30@gmail.com</p>

        <h3>Enquiry Hours:</h3>
        <p>M-F: 9am to 6pm</p>
        <p>Sat: 11am to 4pm</p>
        <p>Sun: Holiday</p>
      </div>

      <div className="logo-container">
        {/* Replace with your actual logo image */}
        <img src="your-logo.png" alt="Shalom Residency Logo" />
      </div>

      <div className="footer">
        <p>&copy; 2024 Shalom Residency. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
