import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ADD_STUDENT, addStudentThunk} from '../../actions/StudentActions';
import store from '../../Store';
import AllStudentView from './AllStudentView';

class AllStudentsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

            firstName: "N/A",
            lastName : "N/A",
            email: "N/A",
            campus: "N/A",
            gpa: "N/A",
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
            id: this.props.students.length + 1,
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
        addStudent: (newStudent) => {
            dispatch(addStudentThunk(newStudent));
        }
    };
}

export default connect(mapStates, mapDispatch)(AllStudentsContainer);
