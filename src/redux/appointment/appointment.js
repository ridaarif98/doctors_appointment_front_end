import axios from 'axios';

const CREATE_APPOINTMENT = 'doctors_appointment_front_end/appointment/CREATE_APPOINTMENT';
const GET_APPOINTMENTS = 'GET_APPOINTMENTS';
const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
export const initialState = {
  fetchedData: [],
  status: '',
  allAppointments: [],
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

export const deleteAppointment = async (appointment) => {
  const data = await axios.delete(`${'http://localhost:3001/api/v1/appointments'}/${appointment}`);
  return data;
};

export const getAppointments = () => async (dispatch) => {
  const appointmentGet = await fetch('http://[::1]:3001//api/v1/appointments');
  const doctorList = await appointmentGet.json();
  let appointmentsData = [];
  appointmentsData = doctorList.data.map((doctor) => doctor);

  dispatch({
    type: GET_APPOINTMENTS,
    payload: appointmentsData,
  });
};

export const appointmentAction = (data) => ({
  type: CREATE_APPOINTMENT,
  payload: data,
});

export const userAppointment = (city, appointmentTime, doctorId, user) => async (dispatch) => {
  const data = await createAppointment(city, appointmentTime, doctorId, user);
  dispatch(appointmentAction(data));
};

export const deleteAppointmentAction = (appointment) => async (dispatch) => {
  await deleteAppointment(appointment)
    .then((res) => {
      dispatch({
        type: DELETE_APPOINTMENT,
        payload: res.data.data,
      });
    });
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT:
      return {
        ...state,
        fetchedData: action.payload.data,
        status: action.payload.status,
      };

    case GET_APPOINTMENTS:
      return {
        ...state,
        allAppointments: action.payload,
      };

    case DELETE_APPOINTMENT:
      return {
        ...state,
        allAppointments: state.allAppointments.filter((apt) => apt.id !== action.payload),
      };

    default:
      return state;
  }
};

export default appointmentReducer;
