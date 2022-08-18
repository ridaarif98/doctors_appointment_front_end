import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
} from 'redux-persist';
import loginSessionsReducer from './user/login';
import registerSessionsReducer from './user/register';
import doctorReducer from './mainpage/mainpage';

const persistConfig = {
  key: 'doctor_appointments',
  storage,
};

const rootReducer = combineReducers({
  loginSessionsReducer,
  registerSessionsReducer,
  doctorReducer,
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
