import React from 'react';
// import { Link } from 'react-router-dom';
import './navigation.css';
import image from '../images/consultation.png';

const DesktopMenu = () => {
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
  return (
    <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
        <a className="navbar-brand" href="https://github.com/ridaarif98/doctors_appointment_front_end">
          <img src={image} width="80" height="80" alt="" />
        </a>
      <ul className="nav  flex-column">
        {Links.map((link) => (
          <li className="nav-item" key={link.id}>
            {/* <Link className="link-active" to={link.path}> */}
        <a className="nav-link" href="https://github.com/ridaarif98">{link.text}</a>
            {/* </Link> */}
          </li>
        ))}
      </ul>
      <ul className="nav-icons d-flex justify-content-start m-2">
        <li>
          <a className="fa fa-twitter mx-2 p-1" href="https://github.com/ridaarif98" />
        </li>
        <li>
          <a className="fa fa-facebook-f mx-2 p-1" href="https://github.com/ridaarif98" />
        </li>
        <li>
          <a className="fa fa-github mx-2 p-1" href="https://github.com/ridaarif98" />
        </li>
        <li>
          <a className="fa fa-linkedin mx-2 p-1" href="https://github.com/ridaarif98" />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
