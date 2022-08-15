import axios from "axios";

const BASE_URL = 'http://localhost:3001/api';
const REGISTER_URL = 'register';
const LOGIN_URL = 'login';

export const register = async(name, email, password, password_confirmation) => {
  const data = await axios({
    method: 'POST',
    url: `${BASE_URL}/${REGISTER_URL}`,
    data: {
      name,
      email,
      password,
      password_confirmation
    }
  })

  return data;
}

export const login = async(email, password) => {
  const data = await axios({
    method: 'POST',
    url: `${BASE_URL}/${LOGIN_URL}`,
    data: {
      email,
      password
    }
  });
  return data;
}

export const initialState = {
  fetchedData: '',
  status: ''
}