import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/allCampus.css'

class CampusBox extends Component {
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
								 	    	 <div className="campus-name">
                          Hunter College
                         </div>
											</div>
											<div className="campus-bar">
                        <div className="campus-number">
                          100 Students
                        </div>
											</div>
											<div className="campus-bar-for-buttons">
													<div className="button-campus-box-left">delete</div>
													<div className="button-campus-box-right">edit</div>
											</div>
								 </div>
							 </div>
					</div>
				</div>
		)
	}
}
export default CampusBox
