import {
  register, initialState, login,
} from './user';

const REGISTER = 'USER_REGISTER';
const LOGIN = 'USER_LOGIN';
const LOGOUT = 'userLogOut';

const sessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        fetchedData: action.payload.data,
        status: action.payload.status,
      };

    case LOGIN:
      return {
        ...state,
        fetchedData: action.payload.data,
        status: action.payload.status,
      };

    case LOGOUT:
      return {
        ...state,
        fetchedData: {},
        status: '',
      };

    default:
      return state;
  }
};

export const userRegisterAction = (data) => ({
  type: REGISTER,
  payload: data,
});

export const userLoginAction = (data) => ({
  type: LOGIN,
  payload: data,
});

export const userLogOutAction = () => ({
  type: LOGOUT,
});

export const userRegister = (name, email, password, passwordConfirmation) => async (dispatch) => {
  try {
    const data = await register(name, email, password, passwordConfirmation);
    dispatch(userRegisterAction(data));
  } catch (e) {
    dispatch(userRegisterAction(e.response));
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  try {
    const data = await login(email, password);
    dispatch(userLoginAction(data));
  } catch (e) {
    dispatch(userLoginAction(e.response));
  }
};

export default sessionsReducer;
