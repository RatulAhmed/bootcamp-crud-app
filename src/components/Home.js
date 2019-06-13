import React, {Component} from 'react';
import Nav from './nav.js'
import AllViewAddBar from './allViewAddBar.js'
import CampusBox from './campusBox.js'
import SingleStudentContainer from './Students/SingleStudentContainer.jsx'
class Home extends Component {

    render() {
        return (
            <div>
                <Nav pageName= "Welcome To Chimpy" />
                <AllViewAddBar bar="All Campuses"/>
                <CampusBox />
            </div>
        );
    }
};

export default Home;
