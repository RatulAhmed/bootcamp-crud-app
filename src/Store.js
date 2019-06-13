import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import studentReducer from './reducers/StudentsReducer';
import campusReducer from './reducers/CampusReducer';

const middleWare = thunkMiddleware;
const rootReducer = combineReducers({campusReducer, studentReducer});

export default createStore(rootReducer, applyMiddleware(middleWare));
