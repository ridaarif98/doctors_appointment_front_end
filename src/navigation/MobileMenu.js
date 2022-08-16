import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './mobile.css';
import { Link } from 'react-router-dom';
import image from '../images/consultation.png';

const MobileMenu = () => {
  const newState = useSelector((state) => state);

  const loginStatus = newState.loginSessionsReducer.status;
  // const registerStatus = newState.registerSessionsReducer.status;
  const [navBar, setNavBar] = useState(false);
  const Links = [
    {
      id: 1,
      path: '/doctors_appointment_front_end/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/doctors_appointment_front_end/',
      text: 'Doctors',
    },
    {
      id: 3,
      path: '/doctors_appointment_front_end/',
      text: 'Appointment',
    },
    {
      id: 4,
      path: '/doctors_appoitment_front_end/',
      text: 'My Appointments',
    },
  ];

  const handleToggle = () => {
    setNavBar(!navBar);
  };

  const splashLinks = [
    {
      id: 1,
      path: '/login',
      text: 'Login',
    },
    {
      id: 2,
      path: '/register',
      text: 'Register',
    },
  ];

  // const closeMenu = () => {
  //   setNavBar(false);
  // };

  return (
    <div className="header">
      <img src={image} height="60" width="60" alt="logo" />
      <>
        {
        loginStatus !== '' ? (
          <nav className="navbar">
            <button type="button" onClick={handleToggle}>
              {navBar ? <i className="fa fa-close close-icon" /> : <i className="fa fa-bars" />}
            </button>

            <ul className={`menuNav ${navBar ? ' showMenu' : ''}`}>
              {Links.map((link) => (
                <li className="nav-item" key={link.id}>
                  <Link className="link-active" to={link.path} onClick={handleToggle}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <nav className="navbar">
            <button type="button" onClick={handleToggle}>
              {navBar ? <i className="fa fa-close close-icon" /> : <i className="fa fa-bars" />}
            </button>

            <ul className={`menuNav ${navBar ? ' showMenu' : ''}`}>
              {splashLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <Link className="link-active" to={link.path}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )
       }
      </>
    </div>
  );
};

export default MobileMenu;
