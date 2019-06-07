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
    }

    handleonChange = event  => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleAdd = () => {

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
                        <input type="text" name="firstName" onChange={this.handleonChange}/> <br/>
                        Last Name <br/>
                        <input type="text" name="lastName" onChange={this.handleonChange}/> <br/>
                        Email <br/>
                        <input type="text" name="email" onChange={this.handleonChange}/> <br/>
                        Campus <br/>
                        <input type="text" name="campus" onChange={this.handleonChange}/> <br/>
                        GPA <br/>
                        <input type="number" name="gpa" onChange={this.handleonChange}/>
                    </form>
                    <button onClick={this.handleAdd}> Add </button>
                    <h1/>
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
            <div className="studentInfo">

                <button onClick={this.handleOnClick}> Add Student </button>

                <h1/>

                {this.displayAddForm()}

                {this.state.students.map(student =>
                    <div key={student.id}>
                        <StudentCard removeStudent={this.removeStudent} id={student.id}
                        firstName={student.firstName} lastName={student.lastName}
                        imgUrl={anonymous} email={student.email} gpa={student.gpa}
                        campus={student.campus}/>
                    </div>
                )}
            </div>
        );
    }
};

class StudentCard extends Component {

    render() {
        return (
            <div className="studentCard">
                <button onClick={() => this.props.removeStudent(this.props.id)}> X </button>
                <img src={this.props.imgUrl} alt="Anonymous Icon"/>
                <h1> {this.props.firstName} {this.props.lastName} </h1>
                <h3> {this.props.campus} </h3>
                <h4> {this.props.email} </h4>
                <h4> GPA = {this.props.gpa} </h4>
            </div>
        );
    }
};


export default Student;
