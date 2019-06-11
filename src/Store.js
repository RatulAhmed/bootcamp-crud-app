import { createStore, combineReducers } from 'redux';
import reducer from './reducers/StudentsReducer';
import campusReducer from './reducers/CampusReducer';

// Need to combine reducers 
export default createStore(campusReducer);
