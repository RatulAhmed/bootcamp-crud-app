import React, {Component} from 'react';
import {propTypes} from 'prop-types';

class StudentCard extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <div className="studentInfo">
                <img src={this.props.imgUrl}/>
                <h1> {this.props.firstName} </h1>
                <h1> {this.props.lastName} </h1>
                <h3> {this.props.email} </h3>
                <p> {this.props.gpa} </p>
            </div>
        );
    }
};

class StudentContainer extends Component {

    render() {
        return (
            <div className="studentContainer">
                <div className="card">
                    <StudentCard firstName='Karanveer' lastName='Singh' imgUrl='./anonymous.jpg'
                    email='karansingh98123@gmail.com' gpa='3.5'/>
                </div>
            </div>
        );
    }
};

StudentCard.propTypes = {

    imgUrl: PropTypes.text,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gpa: PropTypes.number
};

export default StudentContainer;
