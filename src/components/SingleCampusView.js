// Presentational Component for SingleCampus

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SingleCampusView extends Component {
	constructor(props){
		super(props);
	};

	displayForm = () => {
        if(this.props.editClick) {
            return (
                <div>
                    <form>
                        Campus Name <br/>
                        <input type="text" name="campusName" onChange={this.props.handleOnChange}/> <br/>
                        Last Name <br/>
                        <input type="text" name="campusAddress" onChange={this.props.handleOnChange}/> <br/>
                        Email <br/>
                        <input type="text" name="imageUrl" onChange={this.props.handleOnChange}/> <br/>
                        Campus <br/>
                        <input type="text" name="description" onChange={this.props.handleOnChange}/> <br/>
                    </form>

                    <button onClick={this.props.handleEdit}> Edit Campus </button>
                    <h1/>
                </div>
            );
        }
    }


	render() {
        return (
		    <div>
                <h1> {this.props.campus.campusAddress} </h1>
                <h3> {this.props.campus.description} </h3>
                <p> {this.props.campus.imageUrl} </p>
                    {this.displayForm()} 
            </div>
                    )
    }
}



export default SingleCampusView;