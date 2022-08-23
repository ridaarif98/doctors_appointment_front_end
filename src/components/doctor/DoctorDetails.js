import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDoctor } from '../../redux/mainpage/mainpage';
import './doctor.css';

const DoctorDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, []);
  const doctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();

  return (
    <ul className="doctor-details">
      { doctors.filter((doctor) => doctor.id === parseInt(id, 10)).map((doc) => (
        <li
          className="container mt-5 align-self-center"
          key={doc.id}
          style={
        {
          margin: '0 auto',
        }
      }
        >
          <div className="row details-pg">
            <div className="col-md-6 col-12">
              <img height="450px" width="450px" src={doc.photo} alt="Portrait of doctor Bruno Rodrigues" />
            </div>
          </div>

          <div className="col-md-6 col-12 details-info">
            <div className="text-end">
              <h1 className="f1-bolder fs-4 text">{doc.name}</h1>
              <p>
                {' '}
                {doc.details}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DoctorDetails;
