import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAppointment } from '../../redux/appointment/appointment';
import './appointment.css';

const AppointmentForm = () => {
  const [city, setCity] = useState('');
  const [appointmenTime, setTime] = useState('');
  const [doctorId, setId] = useState('');

  const doctors = useSelector((state) => state.doctorReducer);
  const activeUser = useSelector((state) => state.sessionsReducer.fetchedData.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const getTarget = e.target;
    const inputValue = getTarget.value;
    switch (getTarget.name) {
      case 'city':
        setCity(inputValue);
        return city;
      case 'appointmenTime':
        setTime(inputValue);
        return appointmenTime;
      case 'doctorId':
        setId(inputValue);
        return doctorId;
      default:
        return 'yes';
    }
  };

  const handleSubmit = (e) => {
    const formTarget = e.target;
    e.preventDefault();
    formTarget.reset();
    dispatch(userAppointment(city, appointmenTime, doctorId, activeUser.id));
    setCity('');
    setTime('');
    setId('');
    setTimeout(() => { navigate('/appointments'); }, 1000);
  };

  return (
    <div className="formSet">
      <h3 className="m-5">
        Book an Appointment
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {/* <label htmlFor="city" className="form-label h6 px-2">City</label> */}
          <input
            type="text"
            className="form-control m-2"
            id="city"
            name="city"
            placeholder="Enter city"
            value={city}
            onChange={handleChange}
            required
          />

          {/* <label htmlFor="datetime" className="form-label h6">DateTime</label> */}
          <input
            className="form-control m-2"
            id="datetime"
            type="datetime-local"
            name="appointmenTime"
            value={appointmenTime}
            min="2022-08-17T00:00"
            max="2050-08-17T00:00"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          {/* <label htmlFor="doctor" className="form-label h6">Doctor</label> */}
          <select id="doctor" value={doctorId} onChange={handleChange} name="doctorId" className="form-select m-2">
            <option value="" className="text">Select your doctor</option>
            {doctors.length > 0
        && doctors.map((doctor) => <option key={doctor.id} value={doctor.id} className="text">{doctor.name}</option>)}

          </select>

          <input type="submit" value="BookAppointment" className="btn btn-primary m-2 bt-submit" />

        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
