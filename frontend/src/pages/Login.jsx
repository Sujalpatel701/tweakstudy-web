import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // To display error messages
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset error message on every submit attempt
        setError('');

        try {
            // Send login request to backend
            const response = await axios.post('http://localhost:5000/auth/login', { email, password });

            // Check if a token was returned and store it in localStorage
            if (response.data.token) {
                localStorage.setItem('token', response.data.token); // Store JWT token in local storage
                alert('Login successful');
                navigate('/'); // Redirect to homepage after successful login
            } else {
                setError('Invalid email or password'); // Handle incorrect credentials
            }
        } catch (err) {
            // Catch any errors from the backend
            setError('Login failed. Please try again.');
            console.error('Login error:', err);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>Login</h2>

                {/* Display error message if there is one */}
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="auth-form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update state on change
                            required
                        />
                    </div>

                    <div className="auth-form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update state on change
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">Login</button>
                </form>

                <p className="auth-text">
                    Don't have an account? <a href="/register">Register here</a>.
                </p>
            </div>
        </div>
    );
};

export default Login;
