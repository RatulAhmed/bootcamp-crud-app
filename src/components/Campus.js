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
		return (
				<div className="campus-flex-container">
					<div className="campus-box">
							<div className="campus-flex-container">
								 <div className="img-container">
								 	<img src="./img/hunter.jpeg"/>
								 </div>
								 <div className="data-container">
								 			<div className="campus-bar">
								 	    	 <div className="campus-name"></div>
											</div>
											<div className="campus-bar">
													<div className="bar-button"></div>
								 					<div className="del-button"></div>
											</div>
											<div className="campus-bar">
													<div className="bar-button"></div>
													<div className="del-button"></div>
											</div>
								 </div>
							 </div>
					</div>
				</div>
		)
	}
}
export default Campus