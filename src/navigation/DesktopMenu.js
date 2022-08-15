import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import image from '../images/consultation.png'

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
    }
  ];
  return (
    <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
        <a class="navbar-brand" href="#">
            <img src={image} width="80" height="80"  alt="" />
        </a>
      <ul class="nav  flex-column">
        {Links.map((link) => (
          <li class="nav-item" key={link.id}>
        {/* <Link className="link-active" to={link.path}> */}
        <a class="nav-link" href="#">{link.text}</a>
            {/* </Link> */}
          </li> 
        ))}
      </ul>
      <ul className="nav-icons d-flex justify-content-start m-2">
        <li>
          <a class="fa fa-twitter mx-2 p-1" aria-hidden="true" href="#"></a>
        </li>
        <li>
          <a class="fa fa-facebook-f mx-2 p-1" href="#"></a>
        </li>
        <li>
          <a class="fa fa-github mx-2 p-1" href="#"></a>
        </li>
        <li>
          <a class="fa fa-linkedin mx-2 p-1" href="#"></a>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopMenu;