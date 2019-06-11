import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EDIT_STUDENT_INFO, REMOVE_STUDENT, ADD_STUDENT,
    editStudentInfo, removeStudent,  addStudent} from '../../actions/StudentActions';
import store from '../../Store';

class SingleStudentContainer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <SingleStudentView studentInfo={this.state.students}/>
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

export default connect(mapStates, mapDispatch) SingleStudentContainer;
