import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style.K/styles.css'; // Ensure this points to your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const location = useLocation();

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Left-aligned Logo Section */}
                <div className="logo">
                    <Link to="/">
                        <img src="/Images/MAJHAIL_DEALERSHIP-removebg-preview.png" alt="Car Dealership Logo" className="logo-image" />
                    </Link>
                    <h1>MAJHAIL DEALERSHIP</h1>
                </div>

                {/* Right-aligned Navigation Links and CTA */}
                <div className="nav-right">
                    <nav className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/repair">Auto Repair</Link>
                        <Link to="/wheels">Wheels and Tires</Link>
                        <Link to="/finance">Finance</Link>
                        <Link to="/about">About Us</Link>
                    </nav>
                    <a href="/location" className="cta-LocationButton">Location</a>

                    {/* Conditionally Render Sign Up Button or Profile Icon */}
                    {location.pathname === '/login' ? (
                        <Link to="/signup" className="signup-button">
                            Sign Up
                        </Link>
                    ) : (
                        <Link to="/login">
                            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
