import React from 'react';
import './Header.css';
import logo from './logo.png'; // Adjust the path to your logo image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="TweakStudy Logo" className="logo-image" /> {/* Add the logo image */}
        TweakStudy
      </div>
      <div className="nav-and-auth">
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="login-button">Login</Link>
          <Link to="/register" className="register-button">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;