import React, {Component} from 'react';
import SingleStudentContainer from './SingleStudentContainer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../../styles/allStudent.css'
import Nav from '../nav.js'
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

              /*  <div >
                    {this.props.studentInfo.map(student =>
                        <div key={student.id}>
                            <Link to={`students/${student.id}`}>
                                <h4> <b> {student.firstName} {student.lastName} </b> </h4>
                            </Link>
                            <p> {student.campus} </p>
                            <p> {student.email} </p>
                            <p> {student.gpa} </p>
                        </div>
                    )}
                </div>
                */
                <div className="flex-container-student">
                  {this.props.studentInfo.map(student =>
                  <div className="box-student">
                         <div className="img-container-student">
                          <img className="image-student" src="chimpy-logo.PNG"/>
                         </div>
                         <div className="data-container-student">
                              <div className="bar-student">
                                 <div className="name-student">
                                  {student.firstName} {student.lastName}
                                 </div>
                              </div>
                              <div className="bar-student">
                                <div className="name-campus-student">
                                  {student.campus}
                                </div>
                              </div>
                         </div>
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
            <div>
            <Nav/>
              <div className="AllStudents">
                  <header> <h1> All Students </h1> </header>
                  <button onClick={updateAddClick}> Add New Student </button>
                  {this.displayForm()}
                  {this.displayStudents()}
               </div>
            </div>
        );
    }
};

export default AllStudentView;
