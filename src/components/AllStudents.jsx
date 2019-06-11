/*
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editStudentInfo, removeStudent,addStudent} from '../actions/StudentActions';
import store from '../Store';

const mapStates = (state, ownProps) => {

    return {
        value: state.students
    }
}

const mapDispatch = (dispatch) => {

    return {
        editStudentInfo: () => {
            dispatch({type: EDIT_STUDENT_INFO});
        },
        removeStudent: () => {
            dispatch({type: REMOVE_STUDENT});
        },
        addStudent: () => {
            dispatch({type: ADD_STUDENT});
        }
    };
}


class AllStudents extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            null
        );
    }
};

export default connect(mapStates, mapDispatch)(AllStudents);

//export default AllStudents;
*/
