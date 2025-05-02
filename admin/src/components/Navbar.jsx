import React from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();

  // Map pathname to display name
  const routeNameMap = {
    '/dashboard': 'Dashboard',
    '/user': 'User',
    '/subject': 'Subject',
  };

  const currentRouteName = routeNameMap[location.pathname] || 'Home';

  return (
    <div className="navbar">
      <h2>{currentRouteName}</h2>
    </div>
  );
};

export default Navbar;
