import React from 'react';
import './Contact.css'; // Import the Contact.css file

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>support@tweakstudy.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>8320801166</p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Education Street, Knowledge City, 12345</p>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;