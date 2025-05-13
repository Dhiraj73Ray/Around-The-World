import React, { useState } from 'react';
import '../assets/css/contact.css';
import ContactForm from './Forms/ContactForm';
import BookingForm from './Forms/BookingForm';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('contact');

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact & Booking</h1>

      <div className="toggle-buttons">
        <button
          className={activeForm === 'contact' ? 'active' : ''}
          onClick={() => setActiveForm('contact')}
        >
          Contact Us
        </button>
        <button
          className={activeForm === 'booking' ? 'active' : ''}
          onClick={() => setActiveForm('booking')}
        >
          Book / Travel Help
        </button>
      </div>

      {activeForm === 'contact' && <ContactForm />}
      {activeForm === 'booking' && <BookingForm />}
    </div>
  );
};

export default Contact;
