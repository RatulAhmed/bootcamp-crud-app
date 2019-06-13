import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/allCampus.css'

class Campus extends Component {
	constructor() {

		super();

		this.state = {
			campusName: "",
			campusAddress: "",
			imageURL : "",
			description: "",
			studentNames: []
		}
		this.blankState = this.state;
	}
	render(){
		return ( <div></div>)
	}
}
export default Campus
