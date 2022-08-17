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
        console.log(doctorId, "hhh")
        return doctorId;
      default:
        return 'yes';
    }
  };

  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();
  
    dispatch(userAppointment(city, appointmenTime, doctorId));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="test">
      <input
        type="text"
        name="city"
        placeholder="Enter city"
        value={city}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="appointmenTime"
        value={appointmenTime}
        min="2022-08-17T00:00"
        max="2050-08-17T00:00"
        onChange={handleChange}
        required
      />
      <select value={doctorId} onChange={handleChange} name="doctorId">
        {doctors.length > 0
        && doctors.map((doctor) => <option key={doctor.id} value={doctor.id}>{doctor.name}</option>)}

        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <input type="submit" value="BookAppointment" />
    </form>
  );
};

export default AppointmentForm;
