import axios from 'axios';

const CREATE_APPOINTMENT = 'doctors_appointment_front_end/appointment/CREATE_APPOINTMENT';
export const initialState = {
  fetchedData: [],
  status: '',
};

export const createAppointment = async (city, appointmentTime, doctorId, user) => {
  const data = await axios({
    method: 'POST',
    url: 'http://localhost:3001/api/v1/appointments',
    data: {
      city,
      appointment_time: appointmentTime,
      doctor_id: doctorId,
      user_id: user,
    },
  });
  return data;
};

export const appointmentAction = (data) => ({
  type: CREATE_APPOINTMENT,
  payload: data,
});

export const userAppointment = (city, appointmentTime, doctorId, user) => async (dispatch) => {
  const data = await createAppointment(city, appointmentTime, doctorId, user);
  dispatch(appointmentAction(data));
};

const createAppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT:
      return {
        ...state,
        fetchedData: action.payload.data,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default createAppointmentReducer;
