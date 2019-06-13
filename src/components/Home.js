import React, {Component} from 'react';
import Nav from './nav.js'
import AllViewAddBar from './allViewAddBar.js'
import CampusBox from './campusBox.js'

class Home extends Component {

    render() {
        return (
            <div>
                <Nav pageName= "CMS: Campus Management System" />
                <AllViewAddBar bar="All Campuses"/>
                <CampusBox />
            </div>
        );
    }
};

export default Home;
