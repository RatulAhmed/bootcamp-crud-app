import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import AllStudentsContainer from './components/Students/AllStudentsContainer';
import SingleStudentContainer from './components/Students/SingleStudentContainer';
import Home from './components/Home';

class App extends Component {

    render() {

        const HomeComponent = () => {
            return (
                <Home/>
            );
        }

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
                <Route exact path='/' render={HomeComponent}/>
                <Route exact path='/students' render={AllStudentsComponent} />
                <Route exact path='/students/:id' render={props => <SingleStudentContainer{...props} />} />
            </Router>
        );
    };
};

export default App;
