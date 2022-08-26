import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
} from 'redux-persist';
import sessionsReducer from './user/register-login';
import doctorReducer from './mainpage/mainpage';
import appointmentReducer from './appointment/appointment';

const persistConfig = {
  key: 'doctor_appointments',
  storage,
};

const rootReducer = combineReducers({
  sessionsReducer,
  doctorReducer,
  appointmentReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
