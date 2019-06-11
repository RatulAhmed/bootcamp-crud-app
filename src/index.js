import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Student from './components/student';
import Campus from './components/Campus';
import AllStudents from './components/AllStudents';
import AllCampus from './components/AllCampus';
import {Provider} from 'react-redux';
import store from './Store';

ReactDOM.render(
    <Provider store={store}>
        <AllStudents />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
