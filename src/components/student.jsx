import React, {Component} from 'react';
import PropTypes from 'prop-types';
import anonymous from './anonymous.jpg';
import './student.css';

class Student extends Component {

    constructor(props){
        super(props);
        this.state = {

            firstName: '',
            lastName: '',
            email: '',
            gpa: 0.0,
            campus: '',
            img: '',

            students: [],

            addClick: false
        };
    }

    handleOnClick = event => {

        this.setState({
            addClick: !this.state.addClick
        });
        {this.displayStudent()}
    }

    handleOnChange = event  => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addStudent = () => {

        let campus;

        if(this.state.campus === ''){
            campus = "This student is not enrolled in any campus";
        }

        const newStudent = {
            id: this.state.students.length,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            gpa: this.state.gpa,
            campus: campus
        };

        this.setState({
            addClick: !this.state.addClick,
            students: [newStudent].concat(this.state.students)
        });
    }

    displayAddForm = () => {

        if(this.state.addClick) {

            return(
                <div>
                    <form>
                        First Name <br/>
                        <input type="text" name="firstName" onChange={this.handleOnChange}/> <br/>
                        Last Name <br/>
                        <input type="text" name="lastName" onChange={this.handleOnChange}/> <br/>
                        Email <br/>
                        <input type="text" name="email" onChange={this.handleOnChange}/> <br/>
                        Campus <br/>
                        <input type="text" name="campus" onChange={this.handleOnChange}/> <br/>
                        GPA <br/>
                        <input type="number" name="gpa" onChange={this.handleOnChange}/>
                    </form>
                    <button onClick={this.addStudent}> Add </button>
                    <h1/>
                </div>
            );
        }
    }

    displayStudent = () => {

        if(this.state.students.length > 0) {
            return (
                <div className="studentInfo">

                    <h1/>

                    {this.state.students.map(student =>
                        <div className="student" key={student.id}>
                            <StudentCard removeStudent={this.removeStudent} id={student.id}
                            firstName={student.firstName} lastName={student.lastName}
                            imgUrl={anonymous} email={student.email} gpa={student.gpa}
                            campus={student.campus}/>
                        </div>
                    )}
                </div>
            );
        }
        else { // if there are no students
            return (
                <div>
                    <h1> THERE ARE NO STUDENTS </h1>
                    <p> Click above to add students </p>
                </div>
            );
        }
    }

    removeStudent = (id) => {

        let studentArray = this.state.students;

        for(let i = 0; i < studentArray.length; i++) {

            if(studentArray[i].id === id) {
                studentArray.splice(i, 1);
            }
        }

        this.setState({
            students: studentArray
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}> Add New Student </button>
                {this.displayAddForm()}
                {this.displayStudent()}
            </div>
        );
    }
};

class StudentCard extends Component {

    render() {
        return (
            <div className="studentCard">
            <img src={this.props.imgUrl} alt="Anonymous Icon"/>
            <button onClick={() => this.props.removeStudent(this.props.id)}> X </button>
                <div className="container">
                    <h4> <b> {this.props.firstName} {this.props.lastName} </b> </h4>
                    <p> {this.props.campus} </p>
                    <p> {this.props.email} </p>
                    <p> GPA = {this.props.gpa} </p>
                </div>
            </div>
        );
    }
};


export default Student;
