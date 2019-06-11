import React, { Component } from 'react'



class NewCampusForm extends Component {
	constructor() {
		super();
		this.state = {
			campusName : ""
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState {(event.target.value)}
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
			<input type="text" placeholder="Search" value=""/>
			<button type="submit">Add Campus</button>
			</form>
			)
	}

}



export default NewCampusForm;