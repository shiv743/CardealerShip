import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Import LandingPage
import Home from './pages/Home'; // Import Home page for inventory
import CarDetails from './pages/CarDetails'; // Import CarDetails page
import Login from './pages/Login'; // Import Login page
import SignIn from './pages/SignIn'; // Import SignIn page
import AppointmentPage from './pages/Booking'; // Import the AppointmentPage component
import axios from 'axios'; // Axios for backend communication
import Location from './pages/Location'; // Import the AppointmentPage component
import AdminPage from './pages/AdminPage';
import Financing from './pages/Financing';
import WheelsAndTires from './pages/WheelsAndTires';
import AutoRepair from './pages/AutoRepair';
import AboutUs from './pages/AboutUs';






function App() {
    const [user, setUser] = useState(null);

    // Function to handle user login
    const handleLogin = async (credentials) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, credentials);
            setUser(response.data); // Save user data upon successful login
            alert('Login successful!');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    // Function to handle user signup
    const handleSignup = async (userData) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, userData);
            alert('Signup successful! Please login.');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Route for Landing Page */}
                    <Route path="/" element={<LandingPage />} />

                    {/* Route for Home page (Inventory) */}
                    <Route path="/inventory" element={<Home />} />

                    {/* Route for Car Details page */}
                    <Route path="/car-details" element={<CarDetails />} />

                    <Route path="/admin" element={<AdminPage />} />


                    {/* Route for Login page */}
                    <Route
                        path="/login"
                        element={
                            <Login
                                onLogin={handleLogin}
                                isAuthenticated={!!user}
                            />
                        }
                    />

                    {/* Route for Sign Up page */}
                    <Route
                        path="/signup"
                        element={
                            <SignIn
                                onSignup={handleSignup}
                                isAuthenticated={!!user}
                            />
                        }
                    />

                    {/* Route for Appointment Booking */}
                    <Route path="/booking" element={<AppointmentPage />} />
                    <Route path="/Location" element={<Location />} />
                    <Route path="/finance" element={<Financing />} />
                    <Route path="/wheels" element={<WheelsAndTires />} />
                    <Route path="/repair" element={<AutoRepair />} />
                    <Route path="/about" element={<AboutUs />} />


 

                </Routes>
            </div>
        </Router>
    );
}

export default App;
