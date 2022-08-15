const FETCH_DOCTORS = 'doctors_appointment_front_end/mainpage/FETCH_DOCTORS';
const GET_DOCTORS_FAILURE = 'doctors_appointment_front_end/mainpage/GET_DOCTORS_FAILURE'

const initialState = {
  loading: true,
  doctor: {},
  error: '',
};

export async function fetchDoctors() {
  const apiUrl = 'http://[::1]:3000//api/v1/doctors';
  const response = await fetch(apiUrl);
  if (response.status !== 200) {
    throw new Error('Can not fetch doctors from given API');
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Can not get and data');
  }
}

function doctorsSuccess(doctor) {
  return {
    type: FETCH_DOCTORS,
    payload: doctor, 
  };
}


function doctorFailure(error) {
  return {
    type: GET_DOCTORS_FAILURE,
    payload: error,
  };
}

export function getDoctor() {
  return (dispatch) => {
    fetchDoctors()
      .then((doctor) => {
        dispatch(doctorsSuccess(doctor));
      })
      .catch((error) => {
        dispatch(doctorFailure(error.message))
      });
  };
}

const doctorReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_DOCTORS:
        return {
          loading: false,
          doctor: action.payload,
          error: '',
        };
      case GET_DOCTORS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
};

export default doctorReducer;