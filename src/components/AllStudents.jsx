import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editStudentInfo, removeStudent,  addStudent} from '../actions/StudentActions';

connect ((store) => {
    return {
        firstName: store.students.firstName,
        lastName: store.students.lastName,
        email: store.students.email,
        campus: store.students.campus,
        gpa: store.students.gpa
    };
})

class AllStudents extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.firstName);
        return(
            null
        );
    }
};

export default AllStudents;
