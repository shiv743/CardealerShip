import React from 'react';
import '../Style.K/styles.css'; // Ensure your styles are correctly imported

const CarCard = ({ car, onViewDetails }) => {
  return (
    <div className="car-card">
      {/* Display the car image */}
      <div className="car-image-container">
        <img
          src={car.image || 'https://via.placeholder.com/150'} // Provide a meaningful fallback image
          alt={car.make && car.model ? `${car.make} ${car.model}` : 'Car Image'}
          className="car-image"
        />
      </div>

      {/* Display car details */}
      <div className="car-info">
        <h4 className="car-name">
          {car.make && car.model ? `${car.make} ${car.model}` : 'Unknown Car'}
        </h4>
        <p className="car-detail">
          <strong>Price:</strong>{' '}
          {car.price !== null && car.price !== undefined
            ? `$${car.price.toLocaleString()}`
            : 'N/A'}
        </p>
        <p className="car-detail">
          <strong>Year:</strong> {car.year || 'N/A'}
        </p>

        <p className="car-detail">
          <strong>Transmission:</strong> {car.transmission || 'N/A'}
        </p>
      </div>

      {/* Action buttons */}
      <div className="car-actions">
        <button onClick={onViewDetails} className="view-details-button">View Details</button>
        <button onClick={() => window.location.href = '/booking'} className="contact-button">Contact Us</button>
        <button onClick={() => window.location.href = '/finance'} className="finance-button">Financing</button>
      </div>
    </div>
  );
};

export default CarCard;
