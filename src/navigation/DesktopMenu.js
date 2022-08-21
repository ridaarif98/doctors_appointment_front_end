import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './navigation.css';
import image from '../images/consultation.png';
import { userLogOutAction } from '../redux/user/register-login';

const DesktopMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newState = useSelector((state) => state);
  const userStatus = newState.sessionsReducer.status;

  const Links = [
    {
      id: 1,
      path: '/doctors',
      text: 'Doctors',
    },
    {
      id: 2,
      path: '/doctors',
      text: 'All-Doctor',
    },
    {
      id: 3,
      path: '/book_appointment',
      text: 'Book_appointment',
    },
    {
      id: 4,
      path: '/appointments',
      text: 'Mi-Appointments',
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
  ];

  const handleLogout = () => {
    dispatch(userLogOutAction());
    navigate('/login');
  };

  return (
    <>
      {
        userStatus === 200 || userStatus === 201 ? (
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
            <button type="button" onClick={handleLogout} className="logout-button-desktop">Logout</button>
          </nav>
        ) : (
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
        )
  }
    </>
  );
};

export default DesktopMenu;
