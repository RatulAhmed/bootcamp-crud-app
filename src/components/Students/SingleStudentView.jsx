import React, {Component} from 'react';

class SingleStudentView extends Component {

    constructor(props){
        super(props);
    };

    displayForm = () => {

        if(this.props.editClick) {
            return  (
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
                    <h1> {this.props.curStudent.firstName} {this.props.curStudent.lastName} </h1>
                    <h3> {this.props.curStudent.campus} </h3>
                    <p> {this.props.curStudent.email} </p>
                    <button onClick = {() => this.props.onEdit}> Edit Student Info </button>
                    {this.displayForm()}
                </div>
                {this.props.students.map(student =>
                    <div>
                        <h4> <b> {student.firstName} {student.lastName} </b> </h4>
                        <p> {student.campus} </p>
                        <p> {student.email} </p>
                    </div>
                )}
            </div>
        );
    }
};

export default SingleStudentView;
