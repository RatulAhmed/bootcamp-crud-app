import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import studentReducer from './reducers/StudentsReducer';
import campusReducer from './reducers/CampusReducer';

const middleWare = thunkMiddleware;
const rootReducer = combineReducers({campusReducer, studentReducer});

// Need to combine reducers
export default createStore(reducer, applyMiddleware(middleWare));

