import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import axios from 'axios';
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../Style.T/Login.css'; // Import CSS for styling

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Loading state for UX
    const navigate = useNavigate(); // Initialize navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state
        try {
            const response = await axios.post('http://localhost:8081/auth/login', { username, password });

            // Check if the logged-in user is admin or a regular user
            if (response.data.role === 'admin') {
                alert('Welcome Admin! Redirecting to the admin dashboard...');
                navigate('/admin'); // Redirect to Admin Dashboard
            } else if (response.data.role === 'user') {
                alert('Login successful! Redirecting to the home page...');
                navigate('/'); // Redirect to LandingPage ("/") for regular users
            }

            // Pass user data to parent (optional)
            onLogin(response.data);
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="login-page">
                <div className="login-container">
                    <h1>Welcome Back!</h1>
                    <form onSubmit={handleLogin}>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="Username" 
                            required 
                        />
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                            required 
                        />
                        <button type="submit" className="login-button" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    <p className="forgot-password">
                        Don’t have an account?{' '}
                        <span className="sign-up-link" onClick={() => navigate('/signup')}>
                            Sign Up Here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
