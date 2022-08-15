import React , { useState } from "react";
import { Link } from 'react-router-dom';
import './mobile.css';

const MobileMenu = () => {
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
  ]

  const handleToggle = () => {
    setNavBar(!navBar);
  };

  const closeMenu = () => {
    setNavBar(false);
  };

  return (
    <nav className="navbar">
        <button onClick={handleToggle}>
            {navBar ?
            <i class="fa fa-close close-icon"></i> : 
            <i class="fa fa-bars"></i>
            }
        </button>
        <ul className={`menuNav ${navBar ? " showMenu" : ""}`}>
        {Links.map((link) => (
          <li class="nav-item" key={link.id}>
        {/* <Link className="link-active" to={link.path}> onClick={()=> closeMenu()} */}
        <a class="nav-link" href="#">{link.text}</a>
            {/* </Link> */}
          </li> 
        ))}
        </ul>
    </nav>
  );
};


export default MobileMenu;