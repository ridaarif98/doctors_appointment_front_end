import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillGearFill, BsArrowRightCircle } from 'react-icons/bs';
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
    <ul className="doctor-details-container">
      {doctors.filter((doctor) => doctor.id === parseInt(id, 10)).map((doc) => (
        <section key={doc.id} className="doc-section">
          <div className="doc-image">
            <img src={doc.image} alt="Doctor" />
          </div>
          <div className="doc-info">
            <h3 className="doc-name">{doc.name}</h3>
            <div className="doc-specialisation">
              <p>Specilisation</p>
              <p>{doc.details}</p>
            </div>

            <div className="doc-fee">
              <p> Hourly fee</p>
              <p>
                $
                {doc.fee}
              </p>
            </div>

            <div className="doc-slogan">
              <p>
                &quot;Keep your vitality. A life without health is like a river without water.&quot;
              </p>
            </div>

            <Link to="/book_appointment" state={doc.id} className="make-appointment-btn">
              <BsFillGearFill />
              <p>Reserve</p>
              <BsArrowRightCircle />
            </Link>
          </div>
        </section>

      ))}
    </ul>
  );
};

export default DoctorDetails;
