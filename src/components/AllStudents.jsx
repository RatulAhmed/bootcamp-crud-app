import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EDIT_STUDENT_INFO, REMOVE_STUDENT, ADD_STUDENT,
    editStudentInfo, removeStudent,  addStudent} from '../actions/StudentActions';
import store from '../Store';

class AllStudents extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.students.map(student =>
                    <div className="studentCard" key={student.id}>
                        <h1> {student.firstName}  {student.lastName} </h1>
                        <h3> {student.campus} </h3>
                        <h4> {student.email} </h4>
                    </div>
                )}
            </div>
        );
    }
};

const mapStates = (state) => {

    return {
        students: state.students
    }
}

const mapDispatch = (dispatch) => {

    return {
        editStudentInfo: (revisedStudent) => {
            dispatch({type: EDIT_STUDENT_INFO});
        },
        removeStudent: (id) => {
            dispatch({type: REMOVE_STUDENT});
        },
        addStudent: (newStudent) => {
            dispatch({type: ADD_STUDENT});
        }
    };
}

export default connect(mapStates, mapDispatch)(AllStudents);
