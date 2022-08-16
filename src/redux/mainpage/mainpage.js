const FETCH_DOCTORS = 'doctors_appointment_front_end/mainpage/FETCH_DOCTORS';
const initialState = [];

export const getDoctor = () => async (dispatch) => {
  const doctorGet = await fetch('http://[::1]:3000//api/v1/doctors');
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
    default:
      return state;
  }
};

export default doctorReducer;
