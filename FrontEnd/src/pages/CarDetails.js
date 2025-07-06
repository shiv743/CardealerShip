import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../Style.K/CarDetails.css';
import { Link } from 'react-router-dom';

const CarDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const car = location.state?.car;

    // Redirect to home if no car data is available
    if (!car) {
        navigate('/');
        return null;
    }

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Back Button */}
            <button className="back-button" onClick={() => navigate('/inventory')}>
                Back to Inventory
            </button>

            <div className="car-details-page-container">
                {/* Car Header */}
                <div className="car-details-header">
                    <h2>{`${car.year || 'N/A'} ${car.make || 'N/A'} ${car.model || 'N/A'}`}</h2>
                </div>

                <div className="car-details-content">
                    {/* Image Section */}
                    <div className="car-image-section">
                        <img
                            src={car.image || 'https://via.placeholder.com/400'}
                            alt={`${car.make || 'Car'} ${car.model || 'Image'}`}
                            className="main-car-image"
                        />

                        {/* Thumbnails */}
                        {car.thumbnails && car.thumbnails.length > 0 && (
                            <div className="thumbnail-container">
                                {car.thumbnails.map((thumbnail, index) => (
                                    <img
                                        src={thumbnail}
                                        key={index}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="thumbnail"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Description Section */}
                    <div className="car-description">
                        <h3>Description</h3>
                        <p>{car.description || 'No description available.'}</p>
                    </div>

                    {/* Specifications and Actions */}
                    <div className="car-specs-and-actions">
                        {/* Specifications */}
                        <div className="car-specs">
                            <h3>Specifications</h3>
                            <ul>
                                <li><strong>Make:</strong> {car.make || 'N/A'}</li>
                                <li><strong>Model:</strong> {car.model || 'N/A'}</li>
                                <li><strong>Year:</strong> {car.year || 'N/A'}</li>
                                <li><strong>Body Style:</strong> {car.bodyStyle || 'N/A'}</li>
                                <li><strong>Odometer:</strong> {car.odometer ? `${car.odometer.toLocaleString()} ${car.odometerUnit || ''}` : 'N/A'}</li>
                                <li><strong>Transmission:</strong> {car.transmission || 'N/A'}</li>
                                <li><strong>Engine:</strong> {car.engine || 'N/A'}</li>
                                <li><strong>Fuel Type:</strong> {car.fuelType || 'N/A'}</li>
                                <li><strong>Exterior Color:</strong> {car.color || 'N/A'}</li>
                                <li><strong>Passengers:</strong> {car.passengers || 'N/A'}</li>
                                <li><strong>Price:</strong> {car.price ? `$${car.price.toLocaleString()}` : 'N/A'}</li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="action-buttons">
                            <Link to="/booking" className="info-button">Get More Information</Link>
                            <Link to="/finance" className="finance-button">Apply for Financing</Link>
                            <Link to="/Location" className="directions-button">Get Directions</Link>
                        </div>

                        {/* Location Information */}
                        <div className="location-info">
                            <h3>Location</h3>
                            <p>MAJHAIL DEALERSHIP</p>
                            <p>506 Main St. N</p>
                            <p>Reddeer, Alberta L6V 1P9</p>
                            <p>Phone: 855-3X5-50X3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
