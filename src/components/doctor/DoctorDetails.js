import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillGearFill, BsArrowRightCircle, BsFillCaretLeftFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import './DoctorDetails.css';
import { getDoctor } from '../../redux/mainpage/mainpage';

const DoctorDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, []);
  const doctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();

  return (
    <ul className="doctor-details">
      {doctors.filter((doctor) => doctor.id === parseInt(id, 10)).map((doc) => (
        <li
          className="container mt-5 align-self-center"
          key={doc.id}
          style={
            {
              margin: '0 auto',
            }
          }
        >
          <div className="row details-fill">
            <div className="col-md-6 col-12 rounded float-left">
              <img height="450px" width="450px" src={doc.image} alt="Portrait of doctor Bruno Rodrigues" />
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

          <table className="table table-striped mt-5">
            <tbody>
              <tr>
                <td>City</td>
                <td>United States Of America</td>
              </tr>
              <tr>
                <td>Specialization</td>
                <td>Psychologist</td>
              </tr>
              <tr>
                <td>Cost / Day</td>
                <td>
                  $
                  40
                </td>
              </tr>
            </tbody>
          </table>

          <Link to="/book_appointment" state={doc.id}>
            <div className="d-flex justify-content-end reserve-div">
              <div className="reserve p-2 d-flex">
                <BsFillGearFill className="mx-2" size={40} color="white" />
                <button className="btn btn-light reserve-btn" type="submit">Reserve</button>
                <BsArrowRightCircle className="mx-2" size={40} color="white" />
              </div>
            </div>
          </Link>

          <Link to="/doctors">
            <div className="main-page-handle-left d-flex justify-content-center align-items-center">
              <BsFillCaretLeftFill />
            </div>
          </Link>

        </li>
      ))}
    </ul>
  );
};

export default DoctorDetails;
