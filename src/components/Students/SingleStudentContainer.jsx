import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EDIT_STUDENT_INFO, REMOVE_STUDENT, editStudentInfo, removeStudent} from '../../actions/StudentActions';
import store from '../../Store';
import SingleStudentView from './SingleStudentView';

class SingleStudentContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            editClick: false,
            curStudent: {},
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

    render() {

        console.log('students are', this.state.students);

        return(
            < SingleStudentView handleEdit={this.handleEdit} handleOnChange={this.handleOnChange}
            onEdit={this.onEdit} editClick={this.state.editClick}
            curStudent={this.state.curStudent} students={this.state.students} />
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
        editStudentInfo: (revisedStudent) => {
            dispatch({type: EDIT_STUDENT_INFO});
        },
        removeStudent: (id) => {
            dispatch({type: REMOVE_STUDENT});
        },
    };
};

export default connect(mapStates, mapDispatch)(SingleStudentContainer);
