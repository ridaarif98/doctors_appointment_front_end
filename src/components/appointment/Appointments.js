import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAppointmentAction, getAppointments } from '../../redux/appointment/appointment';

const Appointments = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.sessionsReducer.fetchedData.user);
  const doctors = useSelector((state) => state.doctorReducer);
  const allAppointments = useSelector((state) => state.appointmentReducer.allAppointments);

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteAppointmentAction(id));
  };

  return (
    <section className="appointments-container">
      {
      allAppointments.length === 0 ? (
        <div>
          <h2 className="title">MY APPOINTMENTS</h2>
          <h4>No Appointments Available</h4>
        </div>
      ) : (
        <>
          <ul className="my-appointments">
            <li className="title">MY APPOINTMENTS</li>
            {
              allAppointments.map((apt) => (apt.user_id === activeUser.id ? (
                <li key={apt.id} className="appointment">
                  <div>
                    <h4>
                      Dr
                      {' '}
                      {doctors.filter((doctor) => doctor.id === apt.doctor_id).map(
                        (doc) => doc.name,
                      )}
                    </h4>
                    <p>{apt.city}</p>
                  </div>
                  <p>{apt.appointment_time.substr(0, 10)}</p>
                  <button type="button" onClick={() => handleDelete(apt.id)} className="appointment-btn">Delete</button>
                </li>
              ) : null))
            }
          </ul>
        </>
      )
    }
    </section>
  );
};

export default Appointments;
