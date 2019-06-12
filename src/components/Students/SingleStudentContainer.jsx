import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EDIT_STUDENT_INFO, REMOVE_STUDENT, editStudentThunk, removeStudentThunk} from '../../actions/StudentActions';
import store from '../../Store';
import SingleStudentView from './SingleStudentView';

class SingleStudentContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            editClick: false,
            firstName: '',
            lastName : '',
            email: '',
            campus: '',
            gpa: '',
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

        const modifiedStudent = {};

        this.props.editStudent(modifiedStudent);
    };

    remove = () => {

        this.props.removeStudent(this.state.id);
    }

    render() {

        let curStudent;

            for(let i = 0; i < this.props.students.length; i++) {
                if(this.state.id == this.props.students[i].id)
                    curStudent = this.props.students[i];
            }

        return (
            < SingleStudentView remove={this.remove} handleEdit={this.handleEdit} handleOnChange={this.handleOnChange}
            onEdit={this.onEdit} editClick={this.state.editClick}
            curStudent={curStudent} students={this.props.students} />
        );
    };

};

const mapStates = (state) => {

    return {
        students: state.students
    };
};

const mapDispatch = (dispatch) => {

    return {
        editStudentInfo: (modifiedStudent) => {
            dispatch(editStudentThunk(modifiedStudent));
        },
        removeStudent: (id) => {
            dispatch(removeStudentThunk(id));
        }
    };
};

export default connect(mapStates, mapDispatch)(SingleStudentContainer);
