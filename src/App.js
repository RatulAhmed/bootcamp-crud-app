import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import AllStudentsContainer from './components/Students/AllStudentsContainer';
import SingleStudentContainer from './components/Students/SingleStudentContainer';
import Campus from './components/Campus';
import AllCampus from './components/AllCampus';
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

        const SingleCampusComponent = () => {
            return (
                <Campus/>
                );
        };

        const AllCampusComponent = () => {
            return (
                <AllCampus/>
                )
        }

        return (
            <Router>
                <Route exact path='/' render={HomeComponent}/>
                <Route exact path='/students' render={AllStudentsComponent} />
                <Route exact path='/students/:id' render={props => <SingleStudentContainer{...props} />} />
                <Route exact path ='/campus/' render={AllCampusComponent}/>
                <Route exact path ='/campus/:id' render={props=> <SingleCampusComponent{...props} />} />
            </Router>
        );
    };
};

export default App;
