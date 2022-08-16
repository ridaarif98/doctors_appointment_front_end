import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import loginSessionsReducer from './user/login';
import registerSessionsReducer from './user/register';
import doctorReducer from './mainpage/mainpage';

const rootReducer = combineReducers({
  loginSessionsReducer,
  registerSessionsReducer,
  doctorReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
