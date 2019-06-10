import React, { Component } from 'react'

// Represents a Single Campus
class Campus extends Component {
	
	constructor() {

		super();
		this.state = {
			campusName: "TestCampus",
			campusAddress: "tempAddress",
			imageURL : "test.jpg",
			description: "dsfsdffsfsd",
			studentNames: []
		}
		this.blankState = this.state;
	}

	render()
	{
		return (
			<div>
			<p>{this.state.campusName}</p>
			</div>
			)
	}	
}

export default Campus;