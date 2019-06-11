import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import AllStudentsContainer from './components/Students/AllStudentsContainer';
import SingleStudentContainer from './components/Students/SingleStudentContainer';

class App extends Component {
    render() {
        const AllStudentsComponent = () => {
            return (
                <AllStudentsContainer />
            );
        };

        const SingleStudentComponent = () => {
            return (
                <SingleStudentContainer />
            );
        };

        return (
            <Router>
                <Route exact path='/' render={AllStudentsComponent} />
                <Route exact path='/:id' render={props => <SingleStudentContainer{...props} />} />
            </Router>
        );
    };
};

export default App;
