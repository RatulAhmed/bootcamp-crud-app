import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EDIT_STUDENT_INFO, REMOVE_STUDENT, editStudentThunk, removeStudentThunk} from '../../actions/StudentActions';
import store from '../../Store';
import SingleStudentView from './SingleStudentView';

const mapStates = (state) => {

    return {
        students: state.studentReducer.students
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

    }; // end of constructor


    onEdit = () => {
        this.setState({
            editClick: !this.state.editClick
        });

    }; // end of onEdit()


    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }; // end of handleOnChange()


    handleEdit = () => {

        let curStudent = {};

        // get the current student
        for(let i = 0; i < this.props.students.length; i++) {
            if(this.props.students[i].id == this.state.id) {
                curStudent = this.props.students[i];
                break;
            }
        }

        //assign value to modifiedStudent
        const modifiedStudent = {
            firstName: this.state.firstName === '' ? curStudent.firstName : this.state.firstName,
            lastName: this.state.lastName === '' ? curStudent.lastName : this.state.lastName,
            email: this.state.email === '' ? curStudent.email : this.state.email,
            campus: this.state.campus === '' ? curStudent.campus : this.state.campus,
            gpa: this.state.gpa == 0.0 ? curStudent.gpa : this.state.gpa,
            id: this.state.id,
        };

        this.setState({
            editClick: !this.state.editClick
        })

        this.props.editStudent(modifiedStudent);

    }; // end of handleEdit()


    remove = () => {

        this.props.removeStudent(this.state.id);

    } // end of remove

    
    render() {

        let curStudent = {};
        for(let i = 0; i < this.props.students.length; i++) {
            if(this.props.students[i].id == this.state.id) {
                curStudent = this.props.students[i];
                break;
            }
        }

        return (
            < SingleStudentView remove={this.remove} handleEdit={this.handleEdit}
            handleOnChange={this.handleOnChange} onEdit={this.onEdit}
            editClick={this.state.editClick} id={this.state.id}
            curStudent={curStudent} students={this.props.students} />
        );
    }; // end of render()

}; // end of SingleStudentContainer

export default connect(mapStates, mapDispatch)(SingleStudentContainer);
