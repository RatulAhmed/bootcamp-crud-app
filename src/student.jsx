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

            students: [{
                id: 0,
                firstName: 'Karanveer',
                lastName: 'Singh',
                email: 'karansingh98123@gmail.com',
                gpa: 3.5,
                campus: 'Hunter College'
            }],

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

        const newStudent = {
            
        }
    }

    displayAddForm = () => {

        if(this.state.addClick) {

            return(
                <div>
                    <form>
                        First Name <br/>
                        <input type="text" name="firstName" onChange={handleonChange}/> <br/>
                        Last Name <br/>
                        <input type="text" name="lastName" onChange={handleonChange}/> <br/>
                        Email <br/>
                        <input type="text" name="email" onChange={handleonChange}/> <br/>
                        Campus <br/>
                        <input type="text" name="campus" onChange={handleonChange}/> <br/>
                        GPA <br/>
                        <input type="number" name="gpa" onChange={handleonChange}/>
                    </form>
                    <button onClick={this.handleAdd}> Add </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="studentInfo">

                <button onClick={this.handleOnClick}> Add Student </button>

                <h1> </h1>

                {this.displayAddForm()}

                {this.state.students.map(student =>
                    <div key={student.id}>
                        <StudentCard firstName={student.firstName} lastName={student.lastName}
                        imgUrl={anonymous} email={student.email} gpa={student.gpa} campus={student.campus}/>
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
