import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/StudentsReducer';
import campusReducer from './reducers/CampusReducer';

let middleWare = thunkMiddleware;

// Need to combine reducers
export default createStore(reducer, applyMiddleware(middleWare));

