import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import doctorReducer from './mainpage/mainpage';

const reducer = combineReducers({
  doctorReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;