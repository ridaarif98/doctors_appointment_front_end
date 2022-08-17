import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAppointment } from '../../redux/appointment/appointment';
import './appointment.css';

const AppointmentForm = () => {
  const [city, setCity] = useState('');
  const [appointmenTime, setTime] = useState('');
  const [doctorId, setId] = useState('');

  const doctors = useSelector((state) => state.doctorReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const getTarget = e.target;
    console.log(getTarget);
    const inputValue = getTarget.value;
    console.log(inputValue);
    switch (getTarget.name) {
      case 'city':
        setCity(inputValue);
        return city;
      case 'appointmenTime':
        setTime(inputValue);
        return appointmenTime;
      case 'doctorId':
        setId(inputValue);
        console.log(doctorId, 'hhh');
        return doctorId;
      default:
        return 'yes';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAppointment(city, appointmenTime, doctorId));
    e.target.reset();
  };

  return (
    <div className="formSet">
      <h3 className="m-5">
        <small className="text-muted">Book an Appointment</small>
      </h3>
      <form onSubmit={handleSubmit}>

        <label htmlFor="city" className="form-label h6">City</label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
          required
        />

        <label htmlFor="datetime" className="form-label h6">DateTime</label>
        <input
          className="form-control"
          id="datetime"
          type="datetime-local"
          name="appointmenTime"
          value={appointmenTime}
          min="2022-08-17T00:00"
          max="2050-08-17T00:00"
          onChange={handleChange}
          required
        />
        <label htmlFor="doctor" className="form-label h6">Doctor</label>
        <select id="doctor" value={doctorId} onChange={handleChange} name="doctorId" className="form-select">
          {doctors.length > 0
        && doctors.map((doctor) => <option key={doctor.id} value={doctor.id}>{doctor.name}</option>)}

        </select>
        <div className="mb-3">
          <input type="submit" value="BookAppointment" className="btn btn-primary mt-3 bt-submit" />
        </div>

      </form>
    </div>
  );
};

export default AppointmentForm;
