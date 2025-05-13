import React, { useState } from 'react';
import DestinationSelect from '../Common/DestinationSelect';

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    people: '',
    specialRequest: ''
  });

  const handleChange = (e) => {
    setBookingData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDestinationChange = (selectedOption) => {
    setBookingData(prev => ({
      ...prev,
      destination: selectedOption ? selectedOption.label : ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted:", bookingData);
    alert("Booking request submitted!");
    setBookingData({
      name: '',
      email: '',
      destination: '',
      date: '',
      people: '',
      specialRequest: ''
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required value={bookingData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Your Email" required value={bookingData.email} onChange={handleChange} />
      
      <DestinationSelect value={bookingData.destination} onChange={handleDestinationChange} />

      <input type="date" name="date" placeholder="Travel Date" required value={bookingData.date} onChange={handleChange} />
      <input type="number" name="people" placeholder="Number of People" required value={bookingData.people} onChange={handleChange} />
      <textarea name="specialRequest" placeholder="Special Requests" rows="4" value={bookingData.specialRequest} onChange={handleChange} />
      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
