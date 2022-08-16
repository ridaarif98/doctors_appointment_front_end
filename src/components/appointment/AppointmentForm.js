import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './appointment.css'

const AppointmentForm = () => {
  const [city, setCity] = useState('');
  const [appointment_time, setTime] = useState('');
  const [doctor_id, setId] = useState('');

  const doctors = useSelector((state) => state.doctorReducer);

  const handleChange = (e) => {
    const getTarget = e.target;
    console.log(getTarget);
    const inputValue = getTarget.value;
    console.log(inputValue);
    switch (getTarget.name) {
      case 'city':
        setCity(inputValue);
        return city;
      case 'appointment_time':
        setTime(inputValue);
        return appointment_time;
      case 'doctor_id':
        setId(inputValue);
        return doctor_id;
      default:
        return 'yes';
    } 
  };

  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();
    form.reset();
  }

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
      name="appointment_time"
      value={appointment_time}
      min="2022-08-17T00:00"
      max="2050-08-17T00:00"
      onChange={handleChange}
      required
    />
    <select value={doctor_id} onChange={handleChange}>
      {doctors.length > 0 && doctors.map((doctor) => 
      <option  key={doctor.id} value={doctor.id}>{doctor.name}</option>
      )}
            
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
    </select>
    <input type="submit" value="BookAppointment" />
  </form>
  );
};

export default AppointmentForm;