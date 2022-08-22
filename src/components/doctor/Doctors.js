import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import * as Icon from 'react-bootstrap-icons';
import './doctor.css';
import { getDoctor } from '../../redux/mainpage/mainpage';
import image from './img/consultation.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={className}
     style={{ ...style, display: 'block', background: 'rgb(154, 226, 154)', height: '6vh',
     width: '4vw', fontSize: '20px', paddingTop: '10px',
     borderRadius: '25px', border: 'none', textAlign: 'center' }} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={className}
     style={{ ...style, display: 'block', background: 'rgb(154, 226, 154)', height: '6vh',
     width: '4vw', fontSize: '20px', paddingTop: '10px',
     borderRadius: '25px', border: 'none', textAlign: 'center' }} />
  );
}

const Doctor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, []);
  const doctors = useSelector((state) => state.doctorReducer);

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
      <p className='text-muted text-center'>Click on doctor to see details!</p>
      <Slider {...settings}>
        {doctors.length > 0 && doctors.map((doctor) => (
          <div key={doctor.id} className="doctor">
            <div className="doctor-image">
              <img src={image} alt="doctor" className="card-img-top" />
            </div>
            <div className="doctor-info">
              <h4>
                {doctor.name}
              </h4>
              <p className="h5 text-muted">. . . . . . . . .</p>
              <p className="card-text text-muted">{doctor.details}</p>
              <p className="d-flex text-center justify-content-center icons">
                <a className="p-1 m-1 icon" href="https://github.com/ridaarif98">
                  <i className="fa fa-twitter circle p-2" />
                </a>
                <a className="p-1 m-1 icon" href="https://github.com/ridaarif98">
                  <i className="fa fa-facebook-f circle p-2" />
                </a>
                <a className="p-1 m-1 icon" href="https://github.com/ridaarif98">
                  <i className="fa fa-linkedin circle p-2" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctor;
