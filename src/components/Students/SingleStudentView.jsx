import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SingleStudentContainer from './SingleStudentContainer';

class SingleStudentView extends Component {

    constructor(props){
        super(props);
    };

    displayForm = () => {

        if(this.props.editClick) {
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

                    <button onClick={this.props.handleEdit}> Edit </button>
                    <h1/>
                </div>
            );
        }
    }

    render() {

        return(
            <div className="singleStudent">
                <div>
                    <h1> SingleStudentView </h1>
                    <h1> {this.props.curStudent.firstName} {this.props.curStudent.lastName} </h1>
                    <h1> {this.props.curStudent.campus} </h1>
                    <h3> {this.props.curStudent.email} </h3>
                    <button onClick={this.props.onEdit}> Edit Student Info </button>
                    <Link to='/students'>
                        <button onClick={this.props.remove}> Remove Student </button>
                    </Link>
                    {this.displayForm()}
                </div>
                {this.props.students.map(student =>
                    <div key={student.id}>
                        <Link to={`/students/${student.id}`}>
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
};

export default SingleStudentView;
