import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css';

const Splash = () => (
  <div className="splash-container">
    <h1>Doctors Appointment</h1>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </div>
);

export default Splash;
