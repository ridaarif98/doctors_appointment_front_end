import axios from 'axios';

const FETCH_DOCTORS = 'doctors_appointment_front_end/mainpage/FETCH_DOCTORS';
const CREATE_DOCTOR = 'GET_DOCTOR';
const DELETE_DOCTOR = 'DELETE_DOCTOR';
const initialState = [];

const createDoctor = async (name, fee, details, image) => {
  const data = await axios({
    method: 'POST',
    url: 'https://doctor-appoitmtment-backend.herokuapp.com/api/v1/doctors',
    data: {
      name,
      fee,
      details,
      image,
    },
  });
  return data;
};

export const deleteDoctor = async (doctor) => {
  const data = await axios.delete(`${'https://doctor-appoitmtment-backend.herokuapp.com/api/v1/doctors'}/${doctor}`);
  return data;
};

const createDoctorAction = (data) => ({
  type: CREATE_DOCTOR,
  payload: data,
});

export const createNewDoctorAction = (name, fee, details, image) => async (dispatch) => {
  const data = await createDoctor(name, fee, details, image);
  dispatch(createDoctorAction(data.data));
};

export const deleteDoctorAction = (doctor) => async (dispatch) => {
  await deleteDoctor(doctor)
    .then((res) => {
      dispatch({
        type: DELETE_DOCTOR,
        payload: res.data.data,
      });
    });
};

export const getDoctor = () => async (dispatch) => {
  const doctorGet = await fetch('https://doctor-appoitmtment-backend.herokuapp.com/api/v1/doctors');
  const doctorList = await doctorGet.json();
  let doctorsData = [];
  doctorsData = doctorList.data.map((doctor) => ({
    id: doctor.id,
    name: doctor.name,
    details: doctor.details,
    image: doctor.image,
  }));

  dispatch({
    type: FETCH_DOCTORS,
    payload: doctorsData,
  });
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS:
      return [...action.payload];

    case CREATE_DOCTOR:
      return [...action.payload];

    case DELETE_DOCTOR:
      return state.filter((doc) => doc.id !== action.payload);

    default:
      return state;
  }
};

export default doctorReducer;
