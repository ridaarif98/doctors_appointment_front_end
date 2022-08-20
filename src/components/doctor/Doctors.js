import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from '../../redux/mainpage/mainpage';
import './doctor.css';
import image from './img/consultation.png';

const Doctor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, []);
  const doctors = useSelector((state) => state.doctorReducer);

  return (

    <div className="all-doctors">
      <h2>Doctors</h2>
      <ul className="dctr-list">
        {doctors.length > 0 && doctors.map((doctor) => (
          <li key={doctor.id} className="card text-center">
            <img src={image} alt="doctor" className="card-img-top" />
            <h5 className="card-title mt-5">
              {' '}
              {doctor.name}
            </h5>
            <p className="card-text text-muted">{doctor.details}</p>
            <p className="d-flex text-center justify-content-center">
              <a className="p-2" href="https://github.com/ridaarif98">
                <i className="fa fa-twitter" />
              </a>
              <a className="p-2" href="https://github.com/ridaarif98">
                <i className="fa fa-facebook-f" />
              </a>
              <a className="p-2" href="https://github.com/ridaarif98">
                <i className="fa fa-linkedin" />
              </a>
            </p>
          </li>
        ))}
        <li className="card text-center">
          <img src={image} alt="doctor" />
          <h5 className="card-title"> TEst</h5>

          <p className="card-text text-muted">bnbnbnbnbnbnbnbnbnbn</p>

        </li>
        <li className="card text-center">
          <img src={image} alt="doctor" />
          <h5 className="card-title"> TEst</h5>

          <p className="card-text text-muted">bnbnbnbnbnbnbnbnbnbn</p>

        </li>
      </ul>
    </div>
  );
};

export default Doctor;
