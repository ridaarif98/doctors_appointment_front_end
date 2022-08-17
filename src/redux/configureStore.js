import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginSessionsReducer from './user/login';
import registerSessionsReducer from './user/register';
import doctorReducer from './mainpage/mainpage';
import createAppointmentReducer from './appointment/appointment';

const rootReducer = combineReducers({
  loginSessionsReducer,
  registerSessionsReducer,
  doctorReducer,
  createAppointmentReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
      thunk,
    }),
  ],
});

export default store;
