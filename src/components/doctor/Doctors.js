/* eslint-disable react/jsx-props-no-spreading */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import { getDoctor, deleteDoctorAction } from '../../redux/mainpage/mainpage';
import { getDoctor } from '../../redux/mainpage/mainpage';
import './doctor.css';

const Doctor = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorReducer);

  useEffect(() => {
    dispatch(getDoctor());
  }, []);

  // const handleDelete = (id) => {
  //   dispatch(deleteDoctorAction(id));
  // };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    <div className="all-doctors">
      <h1>Doctors</h1>
      <p className="text-muted text-center">Click on doctor to see details!</p>
      <Slider {...settings}>
        {doctors.length > 0 && doctors.map((doctor) => (
          <div key={doctor.id} className="doctor">
            <div className="doctor-image">
              <img src={doctor.image} alt="doctor" className="card-img-top" />
            </div>
            <div className="doctor-info">
              <Link to={`/doctors/${doctor.id}`} className="doctor-name">
                {doctor.name}
              </Link>
              <p className="h5 text-muted">. . . . . . . . .</p>
              <p className="card-text text-muted">{doctor.details}</p>
              <div className="d-flex text-center justify-content-center icons">
                <div>
                  <a className="p-1 m-1 icon" href="https://github.com/ridaarif98">
                    <i className="fa fa-twitter circle p-2" />
                  </a>
                </div>
                <div>
                  <a className="p-1 m-1 icon" href="https://github.com/ridaarif98">
                    <i className="fa fa-facebook-f circle p-2" />
                  </a>
                </div>
                <div>
                  <a className="p-1 m-1 icon" href="https://github.com/ridaarif98">
                    <i className="fa fa-linkedin circle p-2" />
                  </a>
                </div>
              </div>
            </div>
            { /* <button type="button" onClick={() => handleDelete(doctor.id)}>Delete</button> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      onClick={onClick}
      className={className}
      onKeyDown={onClick}
      role="button"
      aria-label="Next Arrow"
      tabIndex={0}
      style={{
        ...style,
        display: 'block',
        background: 'rgb(154, 226, 154)',
        height: '6vh',
        width: '4vw',
        fontSize: '20px',
        paddingTop: '10px',
        borderRadius: '25px',
        border: 'none',
        textAlign: 'center',
      }}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      onClick={onClick}
      className={className}
      onKeyDown={onClick}
      role="button"
      aria-label="Prev Arrow"
      tabIndex={0}
      style={{
        ...style,
        display: 'block',
        background: 'rgb(154, 226, 154)',
        height: '6vh',
        width: '4vw',
        fontSize: '20px',
        paddingTop: '10px',
        borderRadius: '25px',
        border: 'none',
        textAlign: 'center',
      }}
    />
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
};
SampleNextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
};

SamplePrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};

export default Doctor;
