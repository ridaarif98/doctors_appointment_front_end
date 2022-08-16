import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import loginSessionsReducer from './user/login';
import registerSessionsReducer from './user/register';

const rootReducer = combineReducers({
  loginSessionsReducer,
  registerSessionsReducer,
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
