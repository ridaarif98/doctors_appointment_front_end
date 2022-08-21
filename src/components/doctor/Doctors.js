import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import * as Icon from 'react-bootstrap-icons';
import './doctor.css';
import { getDoctor } from '../../redux/mainpage/mainpage';
import image from './img/consultation.png';

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
    prevArrow: <Icon.ArrowRight />,
    nextArrow: <Icon.ArrowLeft />,
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
      <Slider {...settings}>
        {doctors.length > 0 && doctors.map((doctor) => (
          <div key={doctor.id} className="doctor">
            <div className="doctor-image">
            <img src={image} alt="doctor" className="card-img-top" />
            </div>
            <div className='doctor-info'>
            <h4>
              {doctor.name}
            </h4>
            <p className="h5 text-muted">. . . . . . . . .</p>
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
            </div>
          </div>

          // <li key={doctor.id} className="card text-center">

          //   <img src={image} alt="doctor" className="card-img-top" />
          //   <h5 className="card-title mt-5">
          //     {' '}
          //     {doctor.name}
          //   </h5>
          //   <p className="card-text text-muted">{doctor.details}</p>
          //   <p className="d-flex text-center justify-content-center">
          //     <a className="p-2" href="https://github.com/ridaarif98">
          //       <i className="fa fa-twitter" />
          //     </a>
          //     <a className="p-2" href="https://github.com/ridaarif98">
          //       <i className="fa fa-facebook-f" />
          //     </a>
          //     <a className="p-2" href="https://github.com/ridaarif98">
          //       <i className="fa fa-linkedin" />
          //     </a>
          //   </p>
          // </li>
        ))}
        {/* <li className="card text-center">
            <img src={image} alt="doctor" />
            <h5 className="card-title"> TEst</h5>

            <p className="card-text text-muted">bnbnbnbnbnbnbnbnbnbn</p>

          </li>
          <li className="card text-center">
            <img src={image} alt="doctor" />
            <h5 className="card-title"> TEst</h5>

            <p className="card-text text-muted">bnbnbnbnbnbnbnbnbnbn</p>

          </li> */}

      </Slider>
      {/* </ul> */}
    </div>
  );
};

export default Doctor;
