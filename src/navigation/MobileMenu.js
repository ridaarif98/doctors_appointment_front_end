import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './mobile.css';
import { Link, useNavigate } from 'react-router-dom';
import image from '../images/consultation.png';
import { userLogOutAction } from '../redux/user/register-login';

const MobileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newState = useSelector((state) => state);

  const userStatus = newState.sessionsReducer.status;
  const [navBar, setNavBar] = useState(false);
  const Links = [
    {
      id: 'doctors-link',
      path: '/doctors',
      text: 'All-Doctor',
    },
    {
      id: 'add-newlink',
      path: '/add-doctor',
      text: 'Add Doctor',
    },
    {
      id: 'book_appointment-link',
      path: '/book_appointment',
      text: 'Book_appointment',
    },
    {
      id: 'Mi-Appointments-link',
      path: '/appointments',
      text: 'Mi-Appointments',
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

  const handleLogout = () => {
    dispatch(userLogOutAction());
    handleToggle();
    navigate('/login');
  };

  return (
    <div className="header">
      <img src={image} height="60" width="60" alt="logo" className="mobile-logo" />
      <>
        {userStatus === 200 || userStatus === 201 ? (
          <nav className="navbar">
            <button type="button" onClick={handleToggle}>
              {navBar ? (
                <i className="fa fa-close close-icon" />
              ) : (
                <i className="fa fa-bars" />
              )}
            </button>
            <ul className={`menuNav ${navBar ? ' showMenu' : ''}`}>
              {Links.map((link) => (
                <li className="nav-item" key={link.id}>
                  <Link
                    className="link-active"
                    to={link.path}
                    onClick={handleToggle}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              <li className="logout-button-mobile">
                <Link
                  className="link-active"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="navbar">
            <button type="button" onClick={handleToggle}>
              {navBar ? (
                <i className="fa fa-close close-icon" />
              ) : (
                <i className="fa fa-bars" />
              )}
            </button>

            <ul className={`menuNav ${navBar ? ' showMenu' : ''}`}>
              {splashLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <Link
                    className="link-active"
                    to={link.path}
                    onClick={handleToggle}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </>
    </div>
  );
};

export default MobileMenu;
