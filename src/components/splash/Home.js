import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Doctors Appointment</h1>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/static">Static</Link>
      </div>
    </div>
  )
}

export default Home;