import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DoctorDetails from './Details';
import { getDoctor } from '../../redux/mainpage/mainpage';
import './doctor.css';
import Details from './Details';

const Doctor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);
  const doctors = useSelector((state) => state.doctorReducer);

  return (
    <div className="all-doctors">
      <h2>Doctors</h2>
      <ul className="div list-group">
        {doctors.length > 0 && doctors.map((doctor) => (
          <li key={doctor.id} className="list-group-item"> <Details name={doctor.name}/>
              <Link to={`/details/${doctor.id}`}>{doctor.name}</Link>
            <p>{doctor.details}</p>
            <i>{doctor.image}</i>
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default Doctor;
