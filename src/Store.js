import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/StudentsReducer';

let middleWare = thunkMiddleware;

export default createStore(reducer, applyMiddleware(middleWare));
