import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EDIT_STUDENT_INFO, REMOVE_STUDENT, ADD_STUDENT,
    editStudentInfo, removeStudent,  addStudent} from '../actions/StudentActions';
import store from '../Store';
import AllStudentView from './AllStudentView';

class AllStudents extends Component {

    constructor(props) {
        super(props);
        this.state = {

            firstName: "",
            lastName : "",
            email: "",
            campus: "",
            gpa: 0.0,
            img: "",
            addClick: false,
        }
    };

    handleOnChange = event => {

        this.setState ({
            [event.target.name]: event.target.value
        })
    };

    handleOnSubmit = () => {

        const newStudent = {
            firstName: this.state.firstName,
            lastName : this.state.lastName,
            email: this.state.email,
            gpa: this.state.gpa,
            campus: this.state.campus,
            img: './anonymous',
            id: this.props.students.length,
        };

        console.log('new student', newStudent)

        this.props.addStudent(newStudent)
    };

    updateAddClick = () => {
        this.setState({
            addClick: !this.state.addClick
        })
    };

    render() {

        console.log(this.props.students);

        return(
            < AllStudentView addClick={this.state.addClick} handleOnSubmit={this.handleOnSubmit}
            handleOnChange={this.handleOnChange} updateAddClick={this.updateAddClick}
            studentInfo={this.props.students} />
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
