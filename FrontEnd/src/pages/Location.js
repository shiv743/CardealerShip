import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import '../Style.K/Location.css'; // CSS file for styling

const Location = () => {
    return (
        <div className="location-page">
            <Navbar /> {/* Navbar at the top */}
            <div className="map-container">
                <iframe
                    title="Majhail Dealership Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19523.745960722743!2d-113.8843365960116!3d52.289355199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537454675f84131f%3A0x5cde987d437bbbb5!2sRed%20Deer%20Motors!5e0!3m2!1sen!2sca!4v1732060733605!5m2!1sen!2sca"
                    className="location-map"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;
