import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        collegeName: '',
        contactNumber: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
        profilePicture: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePicture: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Registering with:', formData);
        navigate('/login');
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    
                    {/* First Name & Last Name */}
                    <div className="form-row">
                        <div className="auth-form-group">
                            <label>First Name</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="auth-form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                    </div>

                    {/* Birth Date & Email */}
                    <div className="form-row">
                        <div className="auth-form-group">
                            <label>Birth Date</label>
                            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                        </div>
                        <div className="auth-form-group">
                            <label>Email ID</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>

                    {/* College Name & Contact Number */}
                    <div className="form-row">
                        <div className="auth-form-group">
                            <label>College Name</label>
                            <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
                        </div>
                        <div className="auth-form-group">
                            <label>Contact Number</label>
                            <input type="tel" name="contactNumber" pattern="[0-9]{10}" value={formData.contactNumber} onChange={handleChange} required />
                        </div>
                    </div>

                    {/* Username & Password */}
                    <div className="form-row">
                        <div className="auth-form-group">
                            <label>Username</label>
                            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div className="auth-form-group">
                            <label>Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                    </div>

                    {/* Confirm Password & Gender */}
                    <div className="form-row">
                        <div className="auth-form-group">
                            <label>Confirm Password</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                        </div>
                        <div className="auth-form-group">
                            <label>Gender</label>
                            <div className="gender-options">
                                <label>
                                    <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required /> Female
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Profile Picture Upload */}
                    <div className="auth-form-group">
                        <label>Upload Profile Picture</label>
                        <input type="file" name="profilePicture" accept="image/*" onChange={handleFileChange} required />
                    </div>

                    <button type="submit" className="auth-button">Register</button>
                </form>
                <p className="auth-text">
                    Already have an account? <a href="/login">Login here</a>.
                </p>
            </div>
        </div>
    );
};

export default Register;
