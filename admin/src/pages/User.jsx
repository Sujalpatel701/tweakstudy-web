import React, { useEffect, useState } from 'react';
import './css/User.css';

const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/user');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error('Failed to fetch users:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="app-container">
        <div className="sidebar">
          <h3>Dashboard</h3>
          <ul>
            <li>Users</li>
            <li>Settings</li>
            <li>Reports</li>
          </ul>
        </div>
        <div className="main-content">
          <div className="loading-spinner">Loading users...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="sidebar">
          <h3>Dashboard</h3>
          <ul>
            <li>Users</li>
            <li>Settings</li>
            <li>Reports</li>
          </ul>
        </div>
        <div className="main-content">
          <div className="error-message">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li>Users</li>
          <li>Settings</li>
          <li>Reports</li>
        </ul>
      </div>
      
      <div className="main-content">
        <div className="user-directory-container">
          <h2 className="directory-title">📋 User Directory</h2>
          
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>User ID</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Gender</th>
                  <th>College</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id || index}>
                    <td>{index + 1}</td>
                    <td>
                      {user.fname || user.lname 
                        ? `${user.fname || ''} ${user.lname || ''}`.trim() 
                        : '-'}
                    </td>
                    <td>{user.userid || '-'}</td>
                    <td>{user.email || '-'}</td>
                    <td>{user.contact_no || '-'}</td>
                    <td>{user.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : '-'}</td>
                    <td>{user.clg_name || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDirectory;