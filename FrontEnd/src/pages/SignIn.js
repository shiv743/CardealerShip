import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation
import Navbar from '../components/Navbar'; // Import Navbar component
import '../Style.T/SignIn.css'; // Import CSS for styling

const SignIn = ({ onSignIn }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Loading state for UX
    const navigate = useNavigate(); // Initialize navigation

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state
        try {
            const response = await axios.post('http://localhost:8081/auth/register', {
                username,
                email,
                password,
            });
            alert('Sign up successful!');
            onSignIn && onSignIn(response.data); // Pass signup data to parent (optional)
            navigate('/'); // Redirect to LandingPage ("/") after successful signup
        } catch (error) {
            console.error('Sign up failed:', error.response?.data || error.message);
            alert(error.response?.data?.message || 'Sign up failed: Please try again.');
        } finally {
            setLoading(false); // Hide loading state
        }
    };

    return (
        <div>
            <Navbar /> {/* Navbar at the top */}
            <div className="sign-in-page">
                <div className="sign-in-container">
                    <h1>BE A MAJHAIL!!</h1>
                    <form onSubmit={handleSignIn}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <button type="submit" className="sign-in-button" disabled={loading}>
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </form>
                    <p className="sign-in-login">
                        Already have an account?{' '}
                        <span
                            className="login-link"
                            onClick={() => navigate('/login')} // Navigate to login
                        >
                            Login Here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
