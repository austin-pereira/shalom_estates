import React from 'react';
import '../styles/Contact.css'; // Import the CSS file
import logo from '../assets/logo.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-panel">
      <div className="contact-info-container">
            <h1>Get In Touch</h1>
            <p>9F3W+FF5, Chikkamagaluru - Sringeri Road,</p>
            <p>Jayapura, Koppa Taluk, 577123</p>

            <p>Phone No: 9323162131</p>
            <p>Email Address: anilpereira30@gmail.com</p>

            <h2>Enquiry Hours:</h2>
            <p>M-F: 9am to 6pm</p>
            <p>Sat: 11am to 4pm</p>
            <p>Sun: Holiday</p>
        </div>
        </div>

      <div className="right-panel">
        <div className="logo-background"> {/* Added for logo background */}
          <img src={logo} alt="Shalom Residency Logo" className="logo-image" />
        </div>
      </div>

    </div>
  );
};

export default Contact;
