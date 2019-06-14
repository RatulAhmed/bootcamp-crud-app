import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EDIT_STUDENT_INFO, REMOVE_STUDENT, editStudentThunk, removeStudentThunk} from '../../actions/StudentActions';
import store from '../../Store';
import SingleStudentView from './SingleStudentView';

const mapStates = (state) => {

    return {
        students: state.students
    };
};

const mapDispatch = (dispatch) => {

    return {
        editStudent: (modifiedStudent) => {
            dispatch(editStudentThunk(modifiedStudent));
        },
        removeStudent: (id) => {
            dispatch(removeStudentThunk(id));
        }
    };
};

class SingleStudentContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            editClick: false,
            firstName: '',
            lastName: '',
            email: '',
            gpa: 0.0,
            campus: '',
            id: this.props.match.params.id,
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
            id: this.props.match.params.id,
            firstName: this.state.firstName === '' ? this.props.students[this.state.id-1].firstName : this.state.firstName,
            lastName: this.state.lastName === '' ? this.props.students[this.state.id-1].lastName : this.state.lastName,
            email: this.state.email === '' ? this.props.students[this.state.id-1].email : this.state.email,
            gpa: this.state.gpa == 0.0 ? this.props.students[this.state.id-1].gpa : this.state.gpa,
            campus: this.state.campus === '' ? this.props.students[this.state.id-1].campus : this.state.campus,
        };

        console.log(modifiedStudent);

        this.setState({
            editClick: !this.state.editClick
        })

        this.props.editStudent(modifiedStudent);
    };

    remove = () => {

        this.props.removeStudent(this.state.id);
    }

    render() {
        console.log('students are ', this.props.students);

        console.log('curStudent is', this.props.students[this.state.id-1]);

        let student = {
            firstName: "Garrison",
            lastName: "Shepard",
            email: "me@123.com",
            campus: "hunter",
          };

        return (
          < SingleStudentView remove={this.remove} handleEdit={this.handleEdit}
          handleOnChange={this.handleOnChange} onEdit={this.onEdit}
          editClick={this.state.editClick} id={this.state.id}
          curStudent={this.props.students[this.state.id-1]} students={this.props.students} />
        );
    };
};

export default connect(mapStates, mapDispatch)(SingleStudentContainer);
