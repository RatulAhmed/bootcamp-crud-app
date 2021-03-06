import React, {Component} from 'react';
import Campus from './Campus'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class AllCampusView extends Component {

	constructor(props) {
	super(props);
	};

	displayForm = () => {
        if(this.props.addClick) {
        	return(
        		<div>
        		<form>
        		Campus Name <br/>
                    <input type="text" name="campusName" onChange={this.props.handleOnChange}/> <br/>
        		</form>
        		</div>

        		)
		}
	}	

    displayCampus = () => {

        if(this.props.campusInfo.length > 0) {

            return (
                <div>
                    {this.props.campusInfo.map(campus =>
                        <div key={campus.id}>
                            <Link to={`campus/${this.props.id}`}>
                                <h4> <b> {campus.campusName} </b> </h4>
                            </Link>
                            <p> {campus.description} </p>
                            <p> {campus.campusAddress} </p>
                        </div>
                    )}
                </div>
            );
        }
        else {

            return (
                <div>
                    <h1> There are no campuses </h1>
                </div>
            )
        }
    }

    render() {

        const {updateAddClick} = this.props;

        return(

            <div>

                <header> <h1> All Campuses </h1> </header>

                <button onClick={updateAddClick}> Add New Campus </button>

                {this.displayForm()}

                {this.displayCampus()}

            </div>
        );
    }
};


export default AllCampusView;