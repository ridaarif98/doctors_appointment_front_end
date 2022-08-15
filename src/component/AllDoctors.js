import React from 'react';
import { useSelector } from 'react-redux';

const AllDoctors = () => {
  const doctors = useSelector((state) => state.doctorReducer.doctor.data);
  console.log(doctors);

  return (
    <div className="my-missions">
      <h2>Doctors</h2>
      <ul className="div list-group">
        {doctors.map((doctor) => (
            <li key={doctor.id} className="list-group-item">
              {doctor.name}
              <p>{doctor.details}</p>
              <i>{doctor.image}</i>
            </li>
          ))}
      </ul>
    </div> 
  )
};

export default AllDoctors;