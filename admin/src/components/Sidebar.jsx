import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import logo from '../assets/logo.png'; // adjust the path if needed

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="TweakStudy Logo" className="logo" />
        <h2 className="brand-name">TweakStudy</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className={({ isActive }) => (isActive ? 'active' : '')}>
            User
          </NavLink>
        </li>
        <li>
          <NavLink to="/subject" className={({ isActive }) => (isActive ? 'active' : '')}>
            Subject
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
