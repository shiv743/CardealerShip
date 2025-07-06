import React from 'react';
import '../Style.T/WheelsAndTires.css'; // Ensure you create this file for styles
import Navbar from '../components/Navbar';

const WheelsAndTires = () => {
  return (
    <div>
      <Navbar />
      <div className="wheels-tires-page">
        <h1>Wheels and Tire</h1>
        <h2>WHEELS FOR YOUR CAR, SUV AND LIGHT TRUCK</h2>
        <p>From winter rims to performance wheels, find the best option for your vehicle.</p>

        <div className="wheels-row">
          {/* Brands */}
          <div className="wheel-item">
            <img
              src="/Images/All Wheels-01.png"
              alt="Wheels Brands"
              className="wheel-image"
            />
            <h3>Brands</h3>
            <p>
              We have custom wheels that will give your vehicle the performance and style
              it deserves.
            </p>
          </div>

          {/* Wheel Warranty */}
          <div className="wheel-item">
            <img
              src="/Images/tire.webp"
              alt="Wheel Warranty"
              className="wheel-image"
            />
            <h3>Wheel Warranty</h3>
            <p>Peace of mind. Free with every wheel purchased.</p>
          </div>
        </div>

        <div className="wheels-row">
          {/* Passenger Cars */}
          <div className="wheel-item">
            <img
              src="/Images/jeep.webp"
              alt="Passenger Cars"
              className="wheel-image"
            />
            <h3>Passenger Cars</h3>
            <p>
              We have custom wheels that will give your vehicle the performance and style
              it deserves.
            </p>
          </div>

          {/* Truck / SUV */}
          <div className="wheel-item">
            <img
              src="/Images/R.png"
              alt="Truck/SUV"
              className="wheel-image"
            />
            <h3>Truck / SUV</h3>
            <p>
              From high performance to heavy duty, we have the best wheels for your truck.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelsAndTires;


