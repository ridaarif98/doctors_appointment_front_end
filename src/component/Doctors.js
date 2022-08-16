import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from '../redux/mainpage/mainpage';
import './doctor.css';

const Doctor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, []);
  const doctors = useSelector((state) => state.doctorReducer);

  return (
    <div className="all-doctors">
      <h2>Doctors</h2>
      if (doctors) {
        <ul className="div list-group">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="list-group-item">
              {doctor.name}
              <p>{doctor.details}</p>
              <i>{doctor.image}</i>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Doctor;
