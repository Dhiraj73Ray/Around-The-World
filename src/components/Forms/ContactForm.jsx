import React, { useState } from 'react';

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Submitted:", contactData);
    alert("Contact form submitted!");
    setContactData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required value={contactData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Your Email" required value={contactData.email} onChange={handleChange} />
      <input type="text" name="subject" placeholder="Subject" required value={contactData.subject} onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" required rows="5" value={contactData.message} onChange={handleChange} />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
