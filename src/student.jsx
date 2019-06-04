import React, {Component} from 'react';
import PropTypes from 'prop-types';
import anonymous from './anonymous.jpg';

class StudentCard extends Component {

    render() {
        return (
            <div className="studentInfo">
                <img src={this.props.imgUrl} alt="Anonymous Icon"/>
                <h1> {this.props.firstName} </h1>
                <h1> {this.props.lastName} </h1>
                <h3> {this.props.email} </h3>
                <h3> GPA = {this.props.gpa} </h3>
            </div>
        );
    }
};

class StudentContainer extends Component {

    render() {
        return (
            <div className="studentContainer">
                <div className="card">
                    <StudentCard firstName='Karanveer' lastName='Singh' imgUrl={anonymous}
                    email='karansingh98123@gmail.com' gpa='3.5'/>
                </div>
            </div>
        );
    }
};

StudentCard.propTypes = {

    imgUrl: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gpa: PropTypes.number
};

export default StudentContainer;
