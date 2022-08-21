import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navigation.css';
import image from '../images/consultation.png';

const DesktopMenu = () => {
  const newState = useSelector((state) => state);
  const loginStatus = newState.loginSessionsReducer.status;
  // const registerStatus = newState.registerSessionsReducer.status;
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
    {
      id: 3,
      path: '/doctor',
      text: 'All-Doctor',
    },
    {
      id: 4,
      path: '/book_appointment',
      text: 'Book_appointment',
    },
    {
      id: 5,
      path: '/test',
      text: 'Test',
    },
  ];

  return (
    <>
      {
      loginStatus === '' ? (
        <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
          <a className="navbar-brand" href="https://github.com/ridaarif98/doctors_appointment_front_end">
            <img src={image} width="80" height="80" alt="" />
          </a>
          <ul className="nav flex-column">
            {splashLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <Link className="link-active" to={link.path}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="nav-icons d-flex justify-content-start m-2">
            <li>
              <a className="mx-2 p-2" href="https://github.com/ridaarif98">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="mx-2 p-2" href="https://github.com/ridaarif98">
                <i className="fa fa-facebook-f" />
              </a>
            </li>
            <li>
              <a className="mx-2 p-2" href="https://github.com/ridaarif98">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a className="mx-2 p-1" href="https://github.com/ridaarif98">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
          <a className="navbar-brand" href="https://github.com/ridaarif98/doctors_appointment_front_end">
            <img src={image} width="80" height="80" alt="" />
          </a>
          <ul className="nav flex-column">
            {Links.map((link) => (
              <li className="nav-item" key={link.id}>
                <Link className="link-active" to={link.path}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="nav-icons d-flex justify-content-start m-2">
            <li>
              <a className="mx-2 p-2" href="https://github.com/ridaarif98">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="mx-2 p-2" href="https://github.com/ridaarif98">
                <i className="fa fa-facebook-f" />
              </a>
            </li>
            <li>
              <a className="mx-2 p-2" href="https://github.com/ridaarif98">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a className="mx-2 p-1" href="https://github.com/ridaarif98">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      )
  }
    </>
  );
};

export default DesktopMenu;
