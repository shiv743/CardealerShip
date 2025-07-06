import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../Style.T/AutoRepair.css'; // Ensure you create this file for styles
import Navbar from '../components/Navbar';

const AutoRepair = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle "Book Appointment" button click
  const handleBookAppointment = () => {
    navigate('/booking'); // Navigate to the Appointment page
  };

  return (
    <div>
      <Navbar />

      <div className="auto-repair-container">
        <h1>AUTO REPAIR</h1>
        <h2>22G SERVICE CENTER</h2>
        <p>
          Are you ready to give your car the service it is asking for? Schedule car maintenance or repair
          right here. Our top-notch service staff can get your car or truck in and out quickly. We know
          there isn’t much more frustrating than being without your vehicle while it gets repaired.
          That’s why we have a staff that excels in providing top-notch maintenance and repair –
          and is able to do it quickly.
        </p>

        <div className="repair-content">
          <div className="services-text">
            <h3>OUR SERVICES INCLUDE</h3>
            <ul>
              <li>All types of major and minor repairs.</li>
              <li>Electronic Tune-Ups in luxury vehicles.</li>
              <li>Computerized Wheel Alignment and Balancing.</li>
              <li>Neatly and accurately installed tires enhance driving experience and promote safety.</li>
              <li>Free Estimates on All Repairs!</li>
              <li>Front and Rear Brakes Services.</li>
            </ul>
            <p>
              Save yourself some time by scheduling service right here. After you submit the form, we’ll
              be in touch to confirm your service appointment. It doesn’t get much easier than that.
            </p>
          </div>
          <div className="services-images">
            <img
              src="/Images/OIP.jpg"
              alt="Repair 1"
              className="service-image"
            />
            <img
              src="/Images/d.jpg"
              alt="Repair 2"
              className="service-image"
            />
          </div>
        </div>

        <div className="repair-details-section">
          <div className="repair-detail">
            <h4>COMPUTER DIAGNOSTICS</h4>
            <p>Having engine trouble? Professional car diagnostic tools can help you get to the bottom of it and find the cause.</p>
          </div>
          <div className="repair-detail">
            <h4>SUSPENSION</h4>
            <p>
              The suspension in your vehicle not only helps to improve ride comfort, but also aids in proper vehicle handling.
            </p>
          </div>
          <div className="repair-detail">
            <h4>OIL CHANGES</h4>
            <p>
              One of the simplest, most powerful, and cost-effective ways to protect your engine: changing your oil and filter regularly.
            </p>
          </div>
          <div className="repair-detail">
            <h4>WHEEL ALIGNMENT</h4>
            <p>
              Our Technicians perform computerized alignments to ensure all four wheels are parallel and sitting flat on the road, and steering wheel is centered.
            </p>
          </div>
          <div className="repair-detail">
            <h4>BRAKE SERVICE</h4>
            <p>
              The disc brake service includes removing the pads and calipers, cleaning and lubricating slide pins and the caliper brackets to prevent sticking or seizing.
            </p>
          </div>
          <div className="repair-detail">
            <h4>CAR REPAIR</h4>
            <p>
              Our team of qualified mechanics and technicians will ensure your vehicle is repaired to the highest standard. We’ll have you back on the road in no time.
            </p>
          </div>
        </div>

        <div className="book-appointment">
          {/* Updated Book Appointment Button */}
          <button className="book-appointment-button" onClick={handleBookAppointment}>
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoRepair;

