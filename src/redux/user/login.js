import { login, initialState } from "./user";
const LOGIN = 'USER_LOGIN';

const loginSessionsReducer = (state = initialState, action) => {
    switch(action.type) {
      case LOGIN:
        return {
          ...state,
          fetchedData: action.payload.data,
          status: action.payload.status
        }

        default:
          return state;
    }
}

export const userLoginAction = (data) => ({
  type: LOGIN,
  payload: data
});


export const userLogin = (email, password) => async (dispatch) => {
  try {
    const data = await login(email, password);
    dispatch(userLoginAction(data))
  } catch (e){
    dispatch(userLoginAction(e.response))
  }
}

export default loginSessionsReducer;