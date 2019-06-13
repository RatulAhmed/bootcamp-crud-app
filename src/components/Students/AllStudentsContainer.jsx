import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ADD_STUDENT, addStudentThunk} from '../../actions/StudentActions';
import store from '../../Store';
import AllStudentView from './AllStudentView';

class AllStudentsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

            firstName: "",
            lastName : "",
            email: "",
            campus: "",
            gpa: "",
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
            img: '',
            id: this.props.students.length,
        };

        this.setState({
            addClick: !this.state.addClick
        });

        this.props.addStudent(newStudent)
    };

    updateAddClick = () => {
        this.setState({
            addClick: !this.state.addClick
        })
    };

    render() {
        console.log(this.props.students)
        return(
            < AllStudentView addClick={this.state.addClick} handleOnSubmit={this.handleOnSubmit}
            handleOnChange={this.handleOnChange} updateAddClick={this.updateAddClick}
            studentInfo={this.props.students} />
        );
    }
};

const mapStates = (state) => {

    return {
        students: state.studentReducer.students
    }
}

const mapDispatch = (dispatch) => {

    return {
        addStudent: (newStudent) => {
            dispatch(addStudentThunk(newStudent));
        }
    };
}

export default connect(mapStates, mapDispatch)(AllStudentsContainer);
