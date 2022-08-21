import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDoctor } from '../../redux/mainpage/mainpage';
import './doctor.css';


const DoctorDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, []);
  const doctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();

  // return (
  //   <div className="all-doctors">
  //     <h2>Doctors</h2>
  //     <ul className="div list-group">
  //       {doctors.length > 0 && doctors.map((doctor) => (
  //         <li key={doctor.id} className="list-group-item"> <Details name={doctor.name}/>
  //             {doctor.name}
  //           <p>{doctor.details}</p>
  //           <i>{doctor.image}</i>
  //         </li>
  //       ))}
  //     </ul> 
  //   </div>
  // );

  return (
    <ul className="doctor-details">
     { doctors.filter((doctor) => doctor.id == parseInt(id, 10)).map((doc) => (
       <li key={doc.id} className="list-group-item">
                   {doc.name}
                 <p>{doc.details}</p>
                <i>{doc.image}</i>
               </li>
     ) )
     }
    </ul>
  )
};

export default DoctorDetails;
