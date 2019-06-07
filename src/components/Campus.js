import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class Campus extends Component {
	constructor {
		super();

		this.state = {
			campusName: "campus",
			campusAddress: "123 Four Five Street",
			imageURL : "/test.jpg",
			description: "Testing Campus Component",
			studentNames: []
		}
		this.blankState = this.state;
	}

	render() {
		<div>
		<ul>
		<li>{this.state.campusName}</li>
		<li>{this.state.campusAddress} </li>
		<li>{this.state.imageURL} </li>
		<li>{this.state.description} </li>
		</ul>
		</div>
	}	


}