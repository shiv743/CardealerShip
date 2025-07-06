import React, { useState } from 'react';
import axios from 'axios';
import '../Style.K/Booking.css';
import Navbar from '../components/Navbar';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    contact: '',
    vehicle: '',
    appointmentDate: '',
    serviceType: '',
    additionalNotes: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/appointments', formData);
      if (response.status === 200) {
        setSuccessMessage(`Your appointment is booked for ${formData.appointmentDate}. Thank you for visiting!`);
        setErrorMessage('');
        setFormData({
          customerName: '',
          contact: '',
          vehicle: '',
          appointmentDate: '',
          serviceType: '',
          additionalNotes: ''
        });
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      setErrorMessage('Failed to book the appointment. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="booking-page">
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Personal Information</h2>
          <div className="form-group">
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Customer Name (required)"
              required
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact (required)"
              required
            />
          </div>

          <h2>Vehicle Details</h2>
          <div className="form-group">
            <input
              type="text"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              placeholder="Vehicle"
              required
            />
          </div>

          <h2>Appointment Information</h2>
          <div className="form-group">
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="styled-dropdown"
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option value="Car Purchase Inquiry">Car Purchase Inquiry</option>
              <option value="Wheels and Tires Service">Wheels and Tires Service</option>
              <option value="Auto Repair">Auto Repair</option>
              <option value="Routine Maintenance">Routine Maintenance</option>
              <option value="Detailed Inspection">Detailed Inspection</option>
              <option value="Battery Replacement">Battery Replacement</option>
              <option value="Brake Service">Brake Service</option>
              <option value="Oil Change">Oil Change</option>
              <option value="Other">Other (Specify in Notes)</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Additional Notes (optional)"
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="booking-contact-info">
          <h3>Contact Information</h3>
          <p>Phone: 855-3X5-50X3</p>
          <p>Address: 506 Main St. N, Reddeer, Alberta L6V 1P9</p>
          <p>Business Hours:</p>
          <p>Monday - Friday: 9:00AM - 7:00PM</p>
          <p>Saturday: 9:00AM - 5:00PM</p>
          <p>Sunday: Closed</p>
          <img
            src="https://plus.unsplash.com/premium_photo-1682089468743-5a31e96f8dd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Car Consultation"
            className="contact-image"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
