import React, {Component} from 'react';
import SingleStudentContainer from './SingleStudentContainer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class AllStudentView extends Component {

    constructor(props){
        super(props);
    };

    displayForm = () => {

        if(this.props.addClick) {
            return (
                <div>
                    <form>
                        First Name <br/>
                        <input type="text" name="firstName" onChange={this.props.handleOnChange}/> <br/>
                        Last Name <br/>
                        <input type="text" name="lastName" onChange={this.props.handleOnChange}/> <br/>
                        Email <br/>
                        <input type="text" name="email" onChange={this.props.handleOnChange}/> <br/>
                        Campus <br/>
                        <input type="text" name="campus" onChange={this.props.handleOnChange}/> <br/>
                        GPA <br/>
                        <input type="number" name="gpa" onChange={this.props.handleOnChange}/>
                    </form>
                    <button onClick={this.props.handleOnSubmit}> Add </button>
                    <h1/>
                </div>
            );
        }
    }

    displayStudents = () => {

        if(this.props.studentInfo.length > 0) {

            return (
                <div>
                    {this.props.studentInfo.map(student =>
                        <div key={student.id}>
                            <Link to='/${student.id}'>
                                <h4> <b> {student.firstName} {student.lastName} </b> </h4>
                            </Link>
                            <p> {student.campus} </p>
                            <p> {student.email} </p>
                            <p> {student.gpa} </p>
                        </div>
                    )}
                </div>
            );
        }
        else {

            return (
                <div>
                    <h1> There are no students </h1>
                    <h4> Click above to add new students </h4>
                </div>
            );
        }
    }

    render() {

        const {updateAddClick} = this.props;

        return(

            <div className="AllStudents">

                <header> <h1> All Students </h1> </header>

                <button onClick={updateAddClick}> Add New Student </button>

                {this.displayForm()}

                {this.displayStudents()}

            </div>
        );
    }
};

export default AllStudentView;
