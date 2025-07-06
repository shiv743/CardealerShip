// src/pages/LandingPage.js
import React from 'react';
import Navbar from '../components/Navbar'; // Ensure Navbar is imported
import '../Style.T/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>HONESTY | TRUTH | FOREVER</h1>
                    <button onClick={() => window.location.href = '/inventory'} className="cta-button">ALL INVENTORY</button>
                </div>
            </section>

            {/* Featured Inventory */}
            <section className="featured-inventory">
                <h2>Featured Inventory</h2>
                <div className="car-grid">
                    {/* Map through featured cars and display them here */}
                </div>
            </section>

            {/* Customer Testimonials */}
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-grid">
                    {/* Add testimonials content */}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="contact-cta">
                <h2>Ready to find your dream car?</h2>
                <button onClick={() => window.location.href = '/booking'} className="contact-button">Contact Us Today</button>

            </section>
        </div>
    );
};

export default LandingPage;
