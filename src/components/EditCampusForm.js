import React, { Component } from 'react'



class EditCampusForm extends Component {
	constructor() {
		super();
		this.state = {
			campusName: "",
			campusAddress: "",
			imageUrl: "",
			description: ""
		}
		this.baseState = state;
	}

	
	handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }


	render() 
	{
		return (
		<form>
		<input type="text" name="campusName" placeholder="Enter Campus Name" onChange={this.handleChange}/>
		<input type="text" name="campusAddress" placeholder="Enter the Address" onChange={this.handleChange}/>
		<input type="text" name="imageUrl" placeholder="Enter an image URL" onChange={this.handleChange}/>
		<input type="text" name="description" placeholder="Write a description" onChange={this.handleChange}/>
		</form>
		)
	}
}



export default EditCampusForm;