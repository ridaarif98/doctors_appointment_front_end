import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAppointments, deleteAppointmentAction } from '../../redux/appointment/appointment';

const Appointments = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.sessionsReducer.fetchedData.user);
  const allAppointments = useSelector((state) => state.appointmentReducer.allAppointments);
  console.log(allAppointments);

  const ownAppoitments = () => {
    const results = [];
    if (allAppointments.length === 0) {
      allAppointments.map((apt) => {
        if (apt.user_id === activeUser.id) {
          results.push(apt);
        }
        return null;
      });
    }
    return results;
  };

  useEffect(() => {
    dispatch(getAppointments());
    ownAppoitments();
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteAppointmentAction(id));
  };

  const myAppointments = ownAppoitments();
  console.log(myAppointments);

  return (
    <section className="appointments-container">
      <h1>{activeUser.name}</h1>
      {
      myAppointments.length === 0 ? (
        <div>
          <h2>No Appointments Available</h2>
        </div>
      ) : (
        <>
          <ul>
            {
              myAppointments.map((apt) => (
                <li key={apt.id}>
                  <h3>{apt.city}</h3>
                  <h3>{apt.time}</h3>
                  <button type="button" onClick={() => handleDelete(apt.id)}>Delete</button>
                </li>
              ))
            }
          </ul>
        </>
      )
    }
    </section>
  );
};

export default Appointments;
