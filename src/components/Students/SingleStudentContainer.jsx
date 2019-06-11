import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EDIT_STUDENT_INFO, REMOVE_STUDENT, ADD_STUDENT,
    editStudentInfo, removeStudent,  addStudent} from '../../actions/StudentActions';
import store from '../../Store';
import SingleStudentView from './SingleStudentView';

class SingleStudentContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: this.props.curStudent.firstName,
            lastName: this.props.curStudent.lastName,
            campus: this.props.curStudent.campus,
            gpa: this.props.curStudent.gpa,
            email: this.props.curStudent.email,
            id: this.props.curStudent.id,
            editClick: false,
        };
    };

    onEdit = () => {
        this.setState({
            editClick: !this.state.editClick
        });
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleEdit = () => {

        const modifiedStudent = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gpa: this.state.gpa,
            email: this.state.email,
            campus: this.state.campus,
            id: this.state.id
        };

        this.props.editStudent(modifiedStudent);
    };

    render() {

        console.log('student in container is', this.props.student);
        return(
            < SingleStudentView handleEdit={this.handleEdit} handleOnChange={this.handleOnChange}
            onEdit={this.onEdit} editClick={this.editClick}
            curStudent={this.props.curStudent} students={this.state.students} />
        );
    };

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

export default connect(mapStates, mapDispatch)(SingleStudentContainer);
