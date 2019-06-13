import React, { Component } from 'react';
import {connect} from 'react-redux';
import {EDIT_CAMPUS, REMOVE_CAMPUS, editCampusThunk, removeCampusThunk } from '../actions/CampusActions';
import store from '../Store';
import '../styles/allCampus.css'
import SingleCampusView from './SingleCampusView';

class Campus extends Component {
	constructor() {

		super();

		this.state = {
			campusName: "",
			campusAddress: "",
			imageURL : "",
			description: "",
			id: this.props.match.params.id,
			//studentNames: []
		}

	}

	onEdit = () => {
		this.setState({
			editClick: !this.state.editClick
		});
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleEdit = () => {
		const modifiedCampus = {};

		this.props.editCampus(modifiedCampus);
	}

	remove = () => {
		this.props.removeCampus(this.state.id);
	}

	render() {

		let currentCampus;
		for(let i = 0; i < this.props.campus.length; i++) {
			if(this.state.id === this.props.campus[i].id){
				currentCampus = this.props.campus[i];
			}
		}

		return (
			<SingleCampusView />

			/*
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
				*/
		)
	}
};

const mapState = (state) => {
	return {
		campus: state.campus
	}
};


const mapDispatch = (dispatch) => {
	return {
		editCampusInfo: (modifiedCampus) => {
			dispatch(editCampusThunk(modifiedCampus));
		},
		removeCampus: (id) => {
			dispatch(removeCampusThunk(id));
		}
	};
};


export default connect(mapState, mapDispatch)(Campus);
